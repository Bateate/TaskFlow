import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/common/Sidebar/Sidebar";
import { WorkspaceI } from "../../../../utils/interfaces/shared.interface";
import classes from "./WorkspacesSidebar.module.css";

function WorkspacesSidebar(props: { workspaces: WorkspaceI[] }) {
  const navigate = useNavigate();
  
  const navigateTo = (workspace: WorkspaceI) => {
    navigate(`/workspaces/${workspace.id}`)
  }
  return (
    <Sidebar>
      <h2 className={classes.sidebar__title}> Workspaces</h2>
      <div className={classes.workspaces__container}>
      {props?.workspaces?.map((workspace) => {
        return <div className={classes.workspace} key={workspace.id}><h3 onClick={() => navigateTo(workspace)}>{workspace.title}</h3></div>;
      })}

      </div>
    </Sidebar>
  );
}

export default WorkspacesSidebar;
