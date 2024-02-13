/* eslint-disable react/prop-types */
import { useState } from "react";
import "./scroll.css";
import { useEffect } from "react";

export default function ScrollIndicator({ url }) {
	const [scrollData, setScrollData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	async function fetchScrolldata(currentUrl) {
		try {
			setLoading(true);
			const response = await fetch(currentUrl);
			const data = await response.json();

			if (data && data.products && data.products.length > 0) {
				setScrollData(data.products);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}

		return scrollData;
	}

	useEffect(() => {
		fetchScrolldata(url);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	function handleScrollPercentage() {
		const howMuchScrolled =
			document.body.scrollTop || document.documentElement.scrollTop;

		const pageHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((howMuchScrolled / pageHeight) * 100);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	if (loading) {
		return <div>Loading data....</div>;
	}

	console.log(scrollPercentage);
	return (
		<div>
			<div className="SITopContainer">
				<h1>Custom scroll indicator</h1>
				<div className="SIScrollTrackingContainer">
					<div
						className="SICurrentScrollProgress"
						style={{ width: `${scrollPercentage}%` }}
					></div>
				</div>
			</div>

			<div className="SIDataContainer">
				{scrollData &&
					scrollData.length &&
					scrollData.map((item, index) => <div key={index}>{item.title}</div>)}
			</div>
		</div>
	);
}
