import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
	const [time, setTime] = useState(3);
	const timeout = useRef(0);
	const navigate = useNavigate();

	useEffect(() => {
		clearTimeout(timeout.current);

		timeout.current = window.setTimeout(() => {
			setTime((t) => t - 1);
		}, 1000);

		if (time <= -1) navigate("/");

		return () => {
			clearTimeout(timeout.current);
		};
	}, [time, navigate]);

	return (
		<div>
			<h1>You will get out of this page in {time} seconds</h1>
		</div>
	);
};
