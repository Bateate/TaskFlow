import { Link } from "react-router-dom";
import { ColumnI, TodoI } from "../../../../utils/interfaces/shared.interface";
import BoardTodo from "../BoardTodo/BoardTodo";
import classes from "./BoardCol.module.css";
import { useState } from "react";

interface Props {
  column: ColumnI;
  onDrop: (
    e: React.DragEvent<HTMLSpanElement>,
    position: number,
    columnId: number
  ) => void;
  onDrag: (todo: TodoI, colId: number) => void;
}

function BoardCol(props: Props) {
  const [column, setColumn] = useState<ColumnI>(props.column);
  const allowDrag = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
  };
  return (
    <div className={classes.column__container}>
      <h2 className={classes.column__title}>{column.id}/{column?.title}</h2>
      {column?.todos && (
        <div className={classes.todos__container}>
          {props?.column?.todos.map((todo) => (
            <BoardTodo
              key={`boardTodo${todo.id}`}
              todo={todo}
              onDrop={(e, position) => props.onDrop(e, position, column.id)}
              onDrag={(todo) => props.onDrag(todo, column.id)}
              onDragOver={allowDrag}
            ></BoardTodo>
          ))}
        </div>
      )}
      <span
        className={classes.dropArea}
        onDrop={(e) => props.onDrop(e, column.todos.length, column.id)}
        onDragOver={allowDrag}
      ></span>
      {props?.column && (
        <>
          <Link to={`${props.column.id}/newTodo`} className={classes.addTodo}>
            <h3>+ Add Todo</h3>
          </Link>
        </>
      )}
    </div>
  );
}

export default BoardCol;
