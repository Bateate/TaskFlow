import classes from "./WorkspaceAvatar.module.css";
import editIcon from "../../../../assets/edit.svg"
function WorkspaceAvatar() {
  return (
    <div className={classes.workspace__container}>
      <div className={classes.workspace}>
        <div className={classes.workspace__avatar}>
          <h1>T</h1>
        </div>
        <div className={classes.workspace__title}>
          <h3>TaskFlow <img src={editIcon} alt="Edit Icon" /></h3>
          <h6>Private/Public</h6>
        </div>
      </div>
      <h6>Details</h6>
    </div>
  );
}

export default WorkspaceAvatar;
