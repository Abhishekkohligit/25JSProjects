/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

	const [multipleSelection, setMultipleSelection] = useState([]);

	function handleSingleSelection(currentId) {
		setSelected(currentId === selected ? null : currentId);
	}

	function handleMultipleselection(currentId) {
		let copyArray = [...multipleSelection];

		const indexOfCurrentId = copyArray.indexOf(currentId);
		if (indexOfCurrentId === -1) {
			copyArray.push(currentId);
		} else {
			copyArray.splice(indexOfCurrentId, 1);
		}

		setMultipleSelection(copyArray);
	}

	return (
		<div className="accordianWrapper">
			<h1>Accordian Component</h1>
			<button
				className={`${enableMultipleSelection && "enabled"}`}
				onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
			>
				{enableMultipleSelection
					? "Multiple selection Enabled"
					: "Enable Multiple selection"}
			</button>
			<div className="accordian">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div key={dataItem.id} className="item">
							<div
								className="title"
								onClick={
									enableMultipleSelection
										? () => handleMultipleselection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enableMultipleSelection
								? multipleSelection.indexOf(dataItem.id) !== -1 && (
										<div className="content">{dataItem.answer}</div>
								  )
								: selected === dataItem.id && (
										<div className="content">{dataItem.answer}</div>
								  )}

							{/* {selected === dataItem.id ||
							multipleSelection.indexOf(dataItem.id !== -1) ? (
								<div className="content">{dataItem.answer}</div>
							) : null} */}
						</div>
					))
				) : (
					<div> no data found</div>
				)}
			</div>
		</div>
	);
}
