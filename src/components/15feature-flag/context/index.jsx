import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFLagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
	const [loading, setLoading] = useState(false);
	const [enabledFlags, setEnabledFlags] = useState({});

	async function fetchFeatureFlags() {
		try {
			setLoading(true);
			// original service call
			const response = await featureFlagsDataServiceCall();
			// console.log(response);
			if (response) {
				setEnabledFlags(response);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
			throw new Error(error);
		}
	}

	useEffect(() => {
		fetchFeatureFlags();
	}, []);

	return (
		<FeatureFLagsContext.Provider value={{ loading, enabledFlags }}>
			{children}
		</FeatureFLagsContext.Provider>
	);
}
