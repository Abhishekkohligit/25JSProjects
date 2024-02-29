/* eslint-disable react/prop-types */

export default function User({ user }) {
	const {
		avatar_url,
		followers,
		following,
		public_repos,

		login,
		name,
		created_at,
	} = user;
	const createdDate = new Date(created_at);

	return (
		<div className="GFB_User">
			<div>
				<img src={avatar_url} alt={login} className="GFB_User-Avatar" />
			</div>
			<div>
				<a className="GFB_User-Link" href={`https://github.com/${login}`}>
					{name || login}
				</a>
				<p>
					{" "}
					User joined in{" "}
					{`${createdDate.toLocaleString("en-us", {
						month: "short",
					})} ${createdDate.getFullYear()}`}
				</p>
			</div>
			<div className="GPF_User-Content">
				<p>Public Repositories: </p>
				<p>{public_repos}</p>
			</div>
			<div className="GPF_User-Content">
				<p>Followers: </p>
				<p>{followers}</p>
			</div>
			<div className="GPF_User-Content">
				<p>Following: </p>
				<p>{following}</p>
			</div>
		</div>
	);
}
