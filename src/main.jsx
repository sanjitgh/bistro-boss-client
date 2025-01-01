import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvaider from "./provaiders/AuthProvaider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvaider>
  </StrictMode>
);
