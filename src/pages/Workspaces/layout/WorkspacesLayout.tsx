import WorkspacesSidebar from "../ui/WorkspacesSidebar/WorkspacesSidebar";
import { Outlet } from "react-router-dom";
import classes from"./WorkspacesLayout.module.css";
import { WorkspaceI } from "../../../utils/interfaces/shared.interface";

function WorkspacesLayout() {
  const workspaces: WorkspaceI[] = [
    {id: "", creatorId: "", title: ""}
  ];
  return (
    <div className={classes.layout}>
      <WorkspacesSidebar workspaces={workspaces}/>
      <Outlet />
    </div>
  );
}

export default WorkspacesLayout;

export function loader() {

}