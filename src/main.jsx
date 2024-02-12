import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/assets/vendor/quill/quill.snow.css";
import "./assets/assets/vendor/quill/quill.bubble.css";
import "./assets/assets/vendor/remixicon/remixicon.css";
import "./assets/assets/vendor/simple-datatables/style.css";
import "./assets/assets/css/style.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ErrorPage from "./ErrorPage.jsx";
import UserList from "./UserList.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
  { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
  { path: "/user-list", element: <UserList />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
