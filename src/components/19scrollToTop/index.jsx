import { useRef } from "react";
import useFetch from "../16UseFetch-CustomHook/indexFetch";
import "./styles.css";

export default function ScrollToTopAndBottom() {
	const { data, error, pending } = useFetch(
		"https://dummyjson.com/products?limit=100",
		{}
	);

	const bottomRef = useRef(null);

	function handleScrollTop() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}
	function handleScrollBottom() {
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	}

	if (pending) {
		return <h1>Loading ! Please Wait..</h1>;
	}
	if (error) {
		return <h1>`${error} error ocurred, please try again`</h1>;
	}

	return (
		<div className="STT-container">
			<div className="STT-wrapper">
				<h1 className="STT-header">Scroll to Top or Bottom Feature</h1>
				<h3 className="STT-Section">This is Top Section</h3>
				<button className="STT-Button" onClick={handleScrollBottom}>
					Scroll to Bottom
				</button>

				<ul>
					{data &&
						data.products &&
						data.products.length &&
						data.products.map((item) => <li key={item.title}>{item.title}</li>)}
				</ul>
				<button className="STT-Button" onClick={handleScrollTop}>
					Scroll to Top
				</button>

				<h3 ref={bottomRef} className="STT-Section">
					{" "}
					This is the bottom section
				</h3>
			</div>
		</div>
	);
}
