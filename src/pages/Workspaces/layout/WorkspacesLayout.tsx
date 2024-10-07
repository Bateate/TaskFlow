import { Outlet, useLoaderData } from "react-router-dom";
import { getUserWorkspaces } from "../../../services/workspaceService";
import {
  AllWorkspacesI
} from "../../../utils/interfaces/shared.interface";
import WorkspacesSidebar from "../ui/WorkspacesSidebar/WorkspacesSidebar";
import classes from "./WorkspacesLayout.module.css";

function WorkspacesLayout() {
  const workspaces = useLoaderData() as AllWorkspacesI;
  return (
    <div className={classes.layout}>
      {}
      <WorkspacesSidebar workspaces={workspaces.userWorkspaces} />
      <Outlet />
    </div>
  );
}

export default WorkspacesLayout;

export async function loader(): Promise<AllWorkspacesI> {
  const res = await getUserWorkspaces();
  return await res.data;
}
