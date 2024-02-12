/* eslint-disable no-unused-vars */
import "./App.css";
import Accordian from "./components/01accordian";
import RandomColor from "./components/02random-color";
import StarRating from "./components/03star-rating";
import ImageSlider from "./components/04image-slider";
import LoadMoreData from "./components/05load-more-data";

function App() {
	return (
		<div className="App">
			{/* Accordian component */}
			{/* <Accordian /> */}
			{/* Randon Color Generator */}
			{/* <RandomColor /> */}

			{/* Star Rating */}
			{/* <StarRating noOfStars={10} /> */}

			{/* ImageSlider */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				page={"3"}
				limit={"10"}
			/> */}

			{/* load more products */}

			<LoadMoreData />
		</div>
	);
}

export default App;
