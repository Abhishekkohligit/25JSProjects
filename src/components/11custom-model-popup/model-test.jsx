import { useState } from "react";
import Modal from "./model";
import "./model.css";

export default function ModelTest() {
	const [showModelState, setShowModelState] = useState(false);

	function handleShowModelPopup() {
		setShowModelState(!showModelState);
	}
 function onClose(){
  setShowModelState(false)
 }

	return (
		<div className="CMP-ModelTest">
			<button className="CMP-Button" onClick={handleShowModelPopup}>
				show Model
			</button>
			{showModelState && <Modal onClose={onClose} id={1} />}
		</div>
	);
}
