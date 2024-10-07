import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";
import { PropsWithChildren } from "react";

function Modal(props: PropsWithChildren) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate('..')
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

export default Modal;
