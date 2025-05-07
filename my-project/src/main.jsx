import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./kolab.jsx";
import LoginPage from "./branch/login.jsx";
import TaskDashboard from "./merge/dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskDashboard />
  </StrictMode>
);
