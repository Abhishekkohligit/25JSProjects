/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import "./styles.css";

export default function SearchAutocomplete() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [searchParam, setSearchParam] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUSers, setFilteredUSers] = useState([]);

	function handleChange(event) {
		const query = event.target.value.toLowerCase();
		setSearchParam(query);
		if (query.length > 1) {
			const filterdData =
				users && users.length
					? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
					: [];
			setFilteredUSers(filterdData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	function handleClick(event) {
		setShowDropdown(false);
		setSearchParam(event.target.innerText);
		setFilteredUSers([]);
	}

	async function fetchListOfUsers() {
		try {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/users?limit=80");

			const data = await response.json();
			if (data && data.users && data.users.length) {
				setUsers(data.users.map((userItem) => userItem.firstName));
				setLoading(false);
				setError(null);
			}
			// console.log(data);
		} catch (err) {
			setError(err);
			setLoading(false);
			console.log(error);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);
	// console.log(users, filteredUSers);

	return (
		<div className="SA-Container">
			<h1>Search Auto-Complete</h1>
			<div className="SA-Content">
				{loading ? (
					<h1>Loading Please wait</h1>
				) : (
					<input
						type="text"
						className="SA-SearchUsers"
						placeholder="Search for Users here ..."
						name="search-users"
						value={searchParam}
						onChange={handleChange}
					/>
				)}

				{showDropdown && (
					<Suggestions handleClick={handleClick} data={filteredUSers} />
				)}
			</div>
		</div>
	);
}
