/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import "./styles.css";

export default function LoadMoreData() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	async function fetchProducts() {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);
			const productResult = await response.json();
			// console.log(productResult);
			if (
				productResult &&
				productResult.products &&
				productResult.products.length
			) {
				setProducts((prevData) => [...prevData, ...productResult.products]);
				setLoading(false);
			}
			console.log("fetch Results", productResult);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisableButton(true);
	}, [products]);

	if (loading) {
		return (
			<div>
				<VscLoading className="sliderLoadingIcon" size={40} />
				<p>Images Loading Please wait...</p>
			</div>
		);
	}

	console.log("products array", products);
	return (
		<div className="LMDwrapper">
			<h1>Load More Data Component</h1>
			<div className="LMDContainer">
				<div className="LMDProduct-container">
					{products && products.length
						? products.map((item, index) => (
								<div key={index} className="LMDProductCard">
									<img
										src={item.thumbnail}
										alt={item.title}
										className="LMDProductCard-image"
									/>
									<p>{item.title}</p>
								</div>
						  ))
						: null}
				</div>
				<div className="LMDButton-container">
					{disableButton && <p>You have reached the limit of 100 Products</p>}
					<button
						className={
							disableButton ? "LMDButton LMDButton-disabled" : "LMDButton"
						}
						onClick={() => setCount(count + 1)}
						disabled={disableButton}
					>
						Load More Products
					</button>
				</div>
			</div>
		</div>
	);
}
