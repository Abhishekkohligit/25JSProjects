import Tabs from "./tabs";
import "./tabs.css";

export default function TabTest() {
	const tabsArray = [
		{
			label: "Tab-1",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies. Mauris commodo quis imperdiet massa tincidunt nunc. Amet dictum sit amet justo donec enim diam vulputate ut. Dolor sit amet consectetur adipiscing elit. Morbi tincidunt augue interdum velit euismod in pellentesque. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Amet mauris commodo quis imperdiet massa tincidunt nunc. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu mi bibendum neque egestas congue quisque. Maecenas ultricies mi eget mauris pharetra et ultrices.",
		},
		{
			label: "Tab-2",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies. Mauris commodo quis imperdiet massa tincidunt nunc. Amet dictum sit amet justo donec enim diam vulputate ut. Dolor sit amet consectetur adipiscing elit. Morbi tincidunt augue interdum velit euismod in pellentesque. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Amet mauris commodo quis imperdiet massa tincidunt nunc. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu mi bibendum neque egestas congue quisque. Maecenas ultricies mi eget mauris pharetra et ultrices.",
		},
		{
			label: "Tab-3",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies. Mauris commodo quis imperdiet massa tincidunt nunc. Amet dictum sit amet justo donec enim diam vulputate ut. Dolor sit amet consectetur adipiscing elit. Morbi tincidunt augue interdum velit euismod in pellentesque. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Amet mauris commodo quis imperdiet massa tincidunt nunc. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu mi bibendum neque egestas congue quisque. Maecenas ultricies mi eget mauris pharetra et ultrices.",
		},
		{
			label: "Tab-4",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies. Mauris commodo quis imperdiet massa tincidunt nunc. Amet dictum sit amet justo donec enim diam vulputate ut. Dolor sit amet consectetur adipiscing elit. Morbi tincidunt augue interdum velit euismod in pellentesque. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Amet mauris commodo quis imperdiet massa tincidunt nunc. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu mi bibendum neque egestas congue quisque. Maecenas ultricies mi eget mauris pharetra et ultrices.",
		},
	];
	function handleChange(currentTabIndex) {
		console.log(currentTabIndex);
	}

	return (
		<>
			<h1>Custom Tab Component</h1>

			<Tabs tabsContent={tabsArray} onChange={handleChange} />
		</>
	);
}
