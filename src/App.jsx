import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import Onboarding from "./pages/Onboarding";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import { ThemeProvider } from "./components/ThemeProvider";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/jobs",
				element: <JobListing />,
			},
			{
				path: "/job/:id",
				element: <Job />,
			},
			{
				path: "/onboarding",
				element: <Onboarding />,
			},
			{
				path: "/my-jobs",
				element: <MyJobs />,
			},
			{
				path: "/post-job",
				element: <PostJob />,
			},
			{
				path: "/saved-lob",
				element: <SavedJobs />,
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
