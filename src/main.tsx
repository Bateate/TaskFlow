import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";
import Board, { loader as boardLoader }from "./features/Board/Board";
import AuthLayout from "./pages/Auth/layout/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/Register";
import Home from "./pages/Home";
import WorkspacesLayout, { loader as workspacesLayoutLoader } from "./pages/Workspaces/layout/WorkspacesLayout";
import Workspaces, { loader as workspacesLoader } from "./pages/Workspaces/Workspaces";
import "./styles/index.css";
import NewBoard, {actions as newBoardActions} from "./pages/Workspaces/ui/NewBoard/NewBoard";
import NewBoardCol, { actions as newBoardColActions} from "./features/Board/ui/NewBoardCol/NewBoardCol";
import NewBoardTodo, { actions as newBoardTodoActions} from "./features/Board/ui/NewBoardTodo/NewBoardTodo";
import TodoModal, { loader as todoLoader, actions as todoActions } from "./features/Board/ui/TodoModal/TodoModal";
import NewWorkspace, {actions as newWorkspaceActions } from "./pages/Workspaces/ui/NewWorkspace/NewWorkspace";

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
            loader: workspacesLoader,
            children: [
              {
                path: "newBoard",
                element: <NewBoard />,
                action: newBoardActions
              },

            ]
          },
          {
            path: "newWorkspace",
            element: <NewWorkspace />,
            action: newWorkspaceActions
          },
        ],
      },
      {
        path: "/board/:boardId",
        element: <Board />,
        loader: boardLoader,
        children: [
          {
            path: ':columnId/:todoId',
            element: <TodoModal />,
            loader: todoLoader,
            action: todoActions
          },
          {
            path: 'newCol',
            element: <NewBoardCol />,
            action: newBoardColActions
          },
          {
            path: ':columnId/newTodo',
            element: <NewBoardTodo />,
            action: newBoardTodoActions
          }
        ]
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
