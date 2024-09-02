import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	return (
		<>
			<div className='grid-bg'></div>
			<Header />
			<main className='container min-h-screen'>
				<Outlet />
			</main>
			<footer className='p-10 text-center bg-gray-800 mt-10'>
				<p>&copy; 2024 Aditya Bhange. All rights reserved.</p>
			</footer>
		</>
	);
};

export default Layout;
