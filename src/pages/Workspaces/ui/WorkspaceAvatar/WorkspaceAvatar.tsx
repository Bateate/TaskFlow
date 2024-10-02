import "./WorkspaceAvatar.css";
import editIcon from "../../../../assets/edit.svg"
function WorkspaceAvatar() {
  return (
    <div className="workspace__container">
      <div className="workspace">
        <div className="workspace__avatar">
          <h1>T</h1>
        </div>
        <div className="workspace__title">
          <h3>TaskFlow <img src={editIcon} alt="Edit Icon" /></h3>
          <h6>Private/Public</h6>
        </div>
      </div>
      <h6>Details</h6>
    </div>
  );
}

export default WorkspaceAvatar;
