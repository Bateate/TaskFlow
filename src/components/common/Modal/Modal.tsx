import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";
import { Props } from "../../../utils/interfaces/props.interface";

function Modal({ children }: Props) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate('..')
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
