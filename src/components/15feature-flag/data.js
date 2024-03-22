const dummyApiResponse = {
	showLightAndDarktheme: true,
	showTicTacToe: true,
	showRandomColorGenerator: true,
	showAccordian: false,
};

function featureFlagsDataServiceCall() {
	return new Promise((resolve, reject) => {
		if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
		else reject("Some Error, Please try again");
	});
}

export default featureFlagsDataServiceCall;
