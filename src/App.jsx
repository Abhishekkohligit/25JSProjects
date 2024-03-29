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
import ScrollIndicator from "./components/09scroll-indicator";
import TabTest from "./components/10custom-tabs/tabs-test";
import ModelTest from "./components/11custom-model-popup/model-test";
import GithubProfileFinder from "./components/12github-profile-finder";
import SearchAutocomplete from "./components/13search-autocomplete-with-api";
import TicTacToe from "./components/14tic-tac-toe";
import FeatureFlags from "./components/15feature-flag";
import FeatureFlagGlobalState from "./components/15feature-flag/context";
import UseFetchHookTest from "./components/16UseFetch-CustomHook/test";
import UseOnClickOutsideTest from "./components/17Use-outside-click/test";
import UseWindowResizeTest from "./components/18UseWindowResize/test";
import ScrollToTopAndBottom from "./components/19scrollToTop";

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
			{/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

			{/* custom Tabs */}
			{/* <TabTest /> */}

			{/* Custom Model Component */}
			{/* <ModelTest /> */}

			{/* Github Profile Search */}
			{/* <GithubProfileFinder /> */}

			{/* Search auto complete with API */}

			{/* <SearchAutocomplete /> */}

			{/* TIc Tac Toe */}
			{/* <TicTacToe /> */}

			{/* Feature FLags */}
			{/* <FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState> */}

			{/* useFetch Custom Hook */}
			{/* <UseFetchHookTest /> */}

			{/* click outside for hiding content */}
			{/* <UseOnClickOutsideTest /> */}

			{/* use Window Resize */}
			{/* <UseWindowResizeTest /> */}

			{/* scroll to top */}
			<ScrollToTopAndBottom />
		</div>
	);
}

export default App;
