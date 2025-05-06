import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./kolab.jsx";
import LoginPage from "./branch/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
