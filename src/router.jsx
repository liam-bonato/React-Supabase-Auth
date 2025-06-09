import { createBrowserRoute } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Dashboard from "./Dashboard.jsx";

export const router = createBrowserRoute([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
