import Sidebar from "../../../../components/common/Sidebar/Sidebar";
import { WorkspaceI } from "../../../../utils/interfaces/shared.interface";

function WorkspacesSidebar(props?: {workspaces: WorkspaceI[]}) {
  return (
    <Sidebar>
      <h3>Board</h3>
      <h3>Something else</h3>
      <h3>And one more</h3>
    </Sidebar>
  );
}

export default WorkspacesSidebar;
