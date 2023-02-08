import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
	const params = useParams();
	const { id } = params;
	const [qs] = useSearchParams();

	return (
		<div>
			<h1>
				Posts {id ? `id: ${id}` : ""}{" "}
				{qs.get("page") ? `qs.page: ${qs.get("page")}` : ""}
			</h1>
			<Link to={`/posts/${id}?page=18`}>Page 18</Link>
			<Outlet />
		</div>
	);
};
