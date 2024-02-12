/* eslint-disable react/prop-types */
import MenuList from "./menu-list";
import "./styles.css";

export default function NestedMenu({ menus = [] }) {
	return (
		<div className="NMWrapper">
			<h1>Nested Menu Component</h1>
			<div className="NMMain-container">
				<MenuList list={menus} />
			</div>
		</div>
	);
}
