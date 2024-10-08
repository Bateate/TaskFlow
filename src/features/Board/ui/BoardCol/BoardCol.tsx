import { Link } from "react-router-dom";
import { ColumnI, TodoI } from "../../../../utils/interfaces/shared.interface";
import classes from "./BoardCol.module.css";
import BoardTodo from "../BoardTodo/BoardTodo";
import { DragEvent } from "react";

interface Props {
  column?: ColumnI;
  onDrop: (e: React.DragEvent<HTMLSpanElement>, position: number) => void;
  onDragEnd: () => void
}

function BoardCol(props: Props) {
  const allowDrag = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
  };
  return (
    <div className={classes.column__container}>
      <h2 className={classes.column__title}>{props.column?.title}</h2>
      {props.column?.todos && (
        <div className={classes.todos__container}>
          {props?.column?.todos.map((todo) => (
            <>
              <span
                className={classes.dopArea}
                onDrop={(e) => props.onDrop(e, todo.position)}
                onDragOver={allowDrag}
                onDragEnd={props.onDragEnd}
              ></span>
              <BoardTodo key={`boardTodo${todo.id}`} todo={todo}></BoardTodo>
            </>
          ))}
        </div>
      )}
      {props?.column && (
          <>
          <Link to={`${props.column.id}/newTodo`} className={classes.addTodo}>
          <span
            className={classes.dopArea}
            onDrop={(e) => props.onDrop(e, -1)}
            onDragOver={allowDrag}
            onDragEnd={props.onDragEnd}
          ></span>
            <h3>+ Add Todo</h3>
          </Link>
        </>
      )}
    </div>
  );
}

export default BoardCol;
