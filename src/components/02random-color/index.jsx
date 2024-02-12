import "./styles.css";
import { useState } from "react";

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");

	function randomizer(length) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateHexColor() {
		const hexRange = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];

		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hexRange[randomizer(hexRange.length)];
		}

		setColor(hexColor);
	}

	function handleCreateRgbColor() {
		const r = randomizer(256);
		const g = randomizer(256);
		const b = randomizer(256);

		setColor(`rgb(${r},${g},${b})`);
	}
	return (
		<div
			style={{
				background: color,
				color: color,
				height: "100vh",
				width: "100vw",
			}}
			className="container"
		>
			<button
				className="color-button"
				// style={{ background: color }}
				onClick={() => setTypeOfColor("hex")}
			>
				Create hex colors
			</button>
			<button
				className="color-button"
				// style={{ background: color }}
				onClick={() => setTypeOfColor("rgb")}
			>
				create RGB Colors
			</button>
			<button
				className="color-button"
				// style={{ background: color }}
				onClick={
					typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
				}
			>
				Generate Colors
			</button>
			<div style={{ color: color }} className="contentRandomColor">
				<h1>
					Type of Color generated is <span>{typeOfColor}</span>
				</h1>
				<span className="colorSpan">{color}</span>
			</div>
		</div>
	);
}
