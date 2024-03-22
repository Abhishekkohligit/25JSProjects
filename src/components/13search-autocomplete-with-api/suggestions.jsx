/* eslint-disable react/prop-types */



export default function Suggestions({ data, handleClick }) {
	return (
		<ul className="SA-Ul">
			{data && data.length
				? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
				: null}
		</ul>
	);
}