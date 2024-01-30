import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import SingleBlogPage from "./src/pages/SingleBlogPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/blog/:id',
                element: <SingleBlogPage />
            }
        ]
    },
]);

export default router;