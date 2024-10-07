import { BoardI } from "../../../../utils/interfaces/shared.interface";
import BoardCard from "../BoardCard/BoardCard";
import classes from "./BoardsList.module.css";

function BoardsList(props: {boards?: BoardI[]}) {
  return (
    <ul className={classes.boards__list}>
      {props.boards?.map((board: BoardI) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </ul>
  );
}

export default BoardsList;
