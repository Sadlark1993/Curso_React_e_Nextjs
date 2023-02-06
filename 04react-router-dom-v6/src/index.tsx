import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";
import { Error404 } from "./components/Error404";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:id" element={<Posts />} />
				<Route path="/redirect" element={<Redirect />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
