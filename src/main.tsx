import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";
import AuthLayout from "./pages/Auth/layout/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/Register";
import Home from "./pages/Home";
import WorkspacesLayout, { loader as workspacesLayoutLoader } from "./pages/Workspaces/layout/WorkspacesLayout";
import Workspaces, { loader as workspacesLoader } from "./pages/Workspaces/Workspaces";
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
        loader: workspacesLayoutLoader,
        children: [
          {
            path: ":workspaceId",
            element: <Workspaces />,
            loader: workspacesLoader
          },
          {
            path: "board/:boardId",
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
