import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function MenuItem({ menuItem }) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	function handleToogleChildren(currentChildren) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[currentChildren]: !displayCurrentChildren[currentChildren],
		});
	}

	console.log(displayCurrentChildren);
	return (
		<li className="NMMenuItemContainer">
			<div className="NMMenuItem-div">
				<p>{menuItem.label}</p>
				{menuItem && menuItem.children && menuItem.children.length && (
					<span onClick={() => handleToogleChildren(menuItem.label)}>
						{displayCurrentChildren[menuItem.label] ? (
							<FaMinusCircle color="#faebd7" size={25} />
						) : (
							<FaPlusCircle color="#faebd7" size={25} />
						)}
					</span>
				)}
			</div>
			{menuItem &&
			menuItem.children &&
			menuItem.children.length > 0 &&
			displayCurrentChildren[menuItem.label] ? (
				<MenuList list={menuItem.children} />
			) : null}
		</li>
	);
}
