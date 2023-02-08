import { useLocation } from "react-router-dom";

export const Home = () => {
	const { state } = useLocation();
	return (
		<div>
			<h1>Home</h1>
			<p>{state as string}</p>
		</div>
	);
};
