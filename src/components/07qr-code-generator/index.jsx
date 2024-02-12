import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
	const [qrCode, setQrCode] = useState("");
	const [inputValue, setInputValue] = useState("");

	function handleGenerateQRCode() {
		setQrCode(inputValue);
	}
	return (
		<div className="QRContainer">
			<h1>QR Code Generator</h1>
			<div className="QRInputs">
				<input
					className="QRInputField"
					type="text"
					name="qr-code"
					placeholder="Enter Value here to generate QR code"
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<button
					className={
						inputValue && inputValue.trim() !== "" ? "QRButton" : "QRButton QRButton_disabled"
					}
					disabled={inputValue && inputValue.trim() !== "" ? false : true}
					onClick={handleGenerateQRCode}
				>
					Generate
				</button>
			</div>
			<div>
				<QRCode
					id="qr-code-value"
					value={qrCode}
					size={400}
					bgColor="#ffffff"
				/>
			</div>
		</div>
	);
}
