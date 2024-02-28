/* eslint-disable react/prop-types */

export default function Modal({ id, header, body, footer, onClose }) {
	return (
		<div id={id || "Modal"} className="CMP-Modal">
			<div className="CMP-Content">
				<div className="CMP-Header">
					<span onClick={onClose} className="CMP-CloseModelIcon">
						&times;
					</span>
					<h3>{header ? header : "Header"}</h3>
				</div>
				<div className="CMP-Body">
					{body ? (
						body
					) : (
						<div>
							<p>This is model Body</p>
						</div>
					)}
				</div>
				<div className="CMP-Footer">
					{footer ? footer : <h2>This is Footer </h2>}
				</div>
			</div>
		</div>
	);
}
