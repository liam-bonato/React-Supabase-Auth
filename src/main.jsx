import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1>React Supabase auth and context</h1>
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
