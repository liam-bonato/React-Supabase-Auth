import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1 className="text-center pt-4 text-3x1">
        React Supabase auth and context
      </h1>
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
