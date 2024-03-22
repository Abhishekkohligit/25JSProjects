import useFetch from "./indexFetch";

export default function UseFetchHookTest() {
	const { data, error, pending } = useFetch(
		"https://dummyjson.com/products",
		{}
	);

	// console.log(data, pending, error);

	return (
		<div>
			<h1>use Fetch Hook</h1>
			{pending && <h3>Pending ! Please Wait</h3>}
			{data &&
				data.products &&
				data.products.length &&
				data.products.map((productItem) => (
					<p key={productItem.key}>{productItem.title}</p>
				))}
			{error && <h3>{error}</h3>}
		</div>
	);
}
