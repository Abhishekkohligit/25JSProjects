import { useContext } from "react";
import Accordian from "../01accordian";
import RandomColor from "../02random-color";
import LightDarkMode from "../08light-dark-mode";
import TicTacToe from "../14tic-tac-toe";

import "./styles.css";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
	const { loading, enabledFlags } = useContext(FeatureFlagsContext);

	const componentsToRender = [
		{
			key: "showLightAndDarktheme",
			component: <LightDarkMode />,
		},
		{
			key: "showTicTacToe",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />,
		},
		{
			key: "showAccordian",
			component: <Accordian />,
		},
	];
	if (loading) return <h1>Loading Data ! Please wait</h1>;

	function checkEnabledFlags(getCurrentKey) {
		return enabledFlags[getCurrentKey];
	}

	return (
		<div>
			<h1>FeatureFlags</h1>
			<div className="FF-Content">
				<div className="FF-Layer-1">
					<div className="FF-layer-2">
						{componentsToRender.map((componentItem) =>
							checkEnabledFlags(componentItem.key) ? (
								<div key={componentItem.key}>
									<h3>Rendered with Feature Flag</h3> {componentItem.component}{" "}
								</div>
							) : null
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
