import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Tabs({ tabsContent, onChange }) {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	function handleOnClick(ind) {
		setCurrentTabIndex(ind);
		onChange(ind);
	}
	const colorArray = ["#bc6c25", "#b5838d", "#2a9d8f", "#9b2226"];
	return (
		<div className="CTWrapper">
			<div className="CTHeading">
				{tabsContent.map((tabItem, index) => (
					<div
						className={currentTabIndex === index ? "CTTab CTActive" : "CTTab"}
						key={index}
						onClick={() => handleOnClick(index)}
					>
						<span className="CTLabel">{tabItem.label}</span>
					</div>
				))}
			</div>
			<div
				className="CTContent"
				style={{ background: colorArray[currentTabIndex] }}
			>
				<h1>
					{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].label}{" "}
					Content
				</h1>

				<p>
					{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
				</p>
			</div>
		</div>
	);
}
