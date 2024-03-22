import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	// console.log(theme);
	return (
		<div className="LDMMain" data-theme={theme}>
			<div className="LDMContainer">
				<p>Hello World</p>
				<button className="LDMButton" onClick={handleToggleTheme}>
					Change Theme
				</button>
			</div>
		</div>
	);
}
