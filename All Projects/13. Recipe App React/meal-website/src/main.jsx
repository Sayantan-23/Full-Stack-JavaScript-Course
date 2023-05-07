import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";
import CategorySearch from "./pages/CategorySearch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category-search",
        element: <CategorySearch />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
