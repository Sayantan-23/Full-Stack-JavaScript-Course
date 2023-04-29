import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Categories from "./pages/Categories";
import Search from "./pages/Search";

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
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

// const appRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route index element={<Home />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);
