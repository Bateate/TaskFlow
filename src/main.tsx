import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";
import Home from "./pages/Home";
import Workspaces from "./pages/Workspaces/Workspaces";
import "./styles/index.css";
import WorkspacesLayout from "./pages/Workspaces/layout/WorkspacesLayout";
import Board from "./features/Board/Board";

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
            element: <Board />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
