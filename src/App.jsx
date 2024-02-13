/* eslint-disable no-unused-vars */
import "./App.css";
import Accordian from "./components/01accordian";
import RandomColor from "./components/02random-color";
import StarRating from "./components/03star-rating";
import ImageSlider from "./components/04image-slider";
import LoadMoreData from "./components/05load-more-data";
import NestedMenu from "./components/06nested-menus";
import menus from "./components/06nested-menus/nested-menus-data";
import QRCodeGenerator from "./components/07qr-code-generator";
import LightDarkMode from "./components/08light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
	return (
		<div className="App">
			{/* 01Accordian component */}
			{/* <Accordian /> */}
			{/* 02Randon Color Generator */}
			{/* <RandomColor /> */}

			{/* 03Star Rating */}
			{/* <StarRating noOfStars={10} /> */}

			{/* 04ImageSlider */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				page={"3"}
				limit={"10"}
			/> */}

			{/* 05Load more products */}

			{/* <LoadMoreData /> */}

			{/* 06Nested Menues */}
			{/* <NestedMenu menus={menus} /> */}

			{/* QR Code Generator */}
			{/* <QRCodeGenerator /> */}

			{/* ThemeToggle */}
			{/* <LightDarkMode /> */}

			{/* scroll indicator */}
			<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
		</div>
	);
}

export default App;
