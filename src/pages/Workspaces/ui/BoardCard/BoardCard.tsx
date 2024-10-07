import { Link } from "react-router-dom";
import classes from "./BoardCard.module.css";
import { BoardI } from "../../../../utils/interfaces/shared.interface";

function BoardCard(props: {board: BoardI}) {
  return (
    <Link to={"/board/" + props.board.id} className={classes.board__card}>
      {props.board.title}
    </Link>
  );
}

export default BoardCard;
