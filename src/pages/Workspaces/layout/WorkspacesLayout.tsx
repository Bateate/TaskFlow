import WorkspacesSidebar from "../ui/WorkspacesSidebar/WorkspacesSidebar";
import { Outlet } from "react-router-dom";
import "./WorkspacesLayout.css";

function WorkspacesLayout() {
  return (
    <div className="layout">
      <WorkspacesSidebar />
      <Outlet />
    </div>
  );
}

export default WorkspacesLayout;
