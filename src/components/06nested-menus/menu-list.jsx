/* eslint-disable react/prop-types */
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
	return (
		<ul className="NMMenu-list-container">
			{list &&
				list.length &&
				list.map((listItem, index) => (
					<MenuItem key={index} menuItem={listItem} />
				))}
		</ul>
	);
}
