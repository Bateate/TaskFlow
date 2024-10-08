import { Outlet, useLoaderData } from "react-router-dom";
import { getUserWorkspaces } from "../../../services/workspaceService";
import { AllWorkspacesI } from "../../../utils/interfaces/shared.interface";
import WorkspacesSidebar from "../ui/WorkspacesSidebar/WorkspacesSidebar";
import classes from "./WorkspacesLayout.module.css";
import { DefaultResponseI } from "../../../utils/interfaces/req-res.interface";

function WorkspacesLayout() {
  const loaderData = useLoaderData() as AllWorkspacesI;
  console.log(loaderData);
  
  return (
    <div className={classes.layout}>
      {}
      <WorkspacesSidebar workspaces={loaderData?.userWorkspaces} />
      <Outlet />
    </div>
  );
}

export default WorkspacesLayout;

export async function loader() {
  const res: DefaultResponseI<AllWorkspacesI> = await getUserWorkspaces();
  return res.data;
}
