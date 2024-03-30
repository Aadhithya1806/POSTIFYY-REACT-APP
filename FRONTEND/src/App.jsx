import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./AuthPages/Login";
import HomePage from "./Pages/HomePage";
import SignUp from "./AuthPages/SignUp";
import Root from "./Pages/Root";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <SignUp /> },
        ],
    },
]);
function App() {
    return (
        <div className=" h-screen m-0  ">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
