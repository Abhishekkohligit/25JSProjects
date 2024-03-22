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
			className="colorWrapper"
			style={{
				background: color,
				color: color,
			}}
		>
			<div
				style={{
					background: color,
					color: color,
				}}
				className="colorContainer"
			>
				<h1>Random Color Component</h1>
				<button
					className="color-button"
					style={{ background: color, color: color }}
					onClick={() => setTypeOfColor("hex")}
				>
					<span>Create HEX colors</span>
				</button>
				<button
					className="color-button"
					style={{ background: color, color: color }}
					onClick={() => setTypeOfColor("rgb")}
				>
					<span>Create RGB colors</span>
				</button>
				<button
					className="color-button"
					style={{ background: color, color: color }}
					onClick={
						typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
					}
				>
					<span>Create Colors</span>
				</button>
				<div
					style={{ background: color, color: color }}
					className="contentRandomColor"
				>
					<h1>
						Type of Color generated is <span>{typeOfColor}</span>
					</h1>
					<span className="colorSpan">{color}</span>
				</div>
			</div>
		</div>
	);
}
