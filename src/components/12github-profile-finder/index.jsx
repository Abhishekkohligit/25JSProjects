import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
	const [username, setUsername] = useState("abhishekkohligit");
	const [userData, setuserData] = useState(null);
	const [loading, setLoading] = useState(false);
	async function fetchGithubUserData() {
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${username}`);
		const data = await res.json();

		if (data) {
			setuserData(data);
			setLoading(false);
			setUsername("");
		}
	}

	function handleSubmit() {
		fetchGithubUserData();
	}

	useEffect(() => {
		fetchGithubUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <h1>Loading Please wait ...</h1>;
	}

	return (
		<div className="GPF-Container">
			<h1>Github Profile Finder</h1>
			<div className="GPF-InputWrapper">
				<input
					type="text"
					name="searchByUsername"
					id="searchByUsername"
					placeholder="Search by Github username"
					className="GPF-Input"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<button className="GPF-InputButton" onClick={handleSubmit}>
					Search
				</button>
			</div>
			<div className="GPF-Content">
				{userData !== null ? <User user={userData} /> : null}
			</div>
		</div>
	);
}
