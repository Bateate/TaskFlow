import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";
import AuthLayout from "./pages/Auth/layout/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/Register";
import Home from "./pages/Home";
import WorkspacesLayout from "./pages/Workspaces/layout/WorkspacesLayout";
import Workspaces from "./pages/Workspaces/Workspaces";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/workspaces",
        element: <WorkspacesLayout />,
        children: [
          {
            path: "/workspaces",
            element: <Workspaces />,
          },
          {
            path: "board/:id",
            element: <Workspaces />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
