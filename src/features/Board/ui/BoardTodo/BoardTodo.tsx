import { Link } from "react-router-dom";
import { TodoI } from "../../../../utils/interfaces/shared.interface";
import classes from "./BoardTodo.module.css";

function BoardTodo(props: { todo: TodoI }) {
  const drag = (e: React.DragEvent<HTMLSpanElement>, todo: TodoI) => {
    e.dataTransfer.setData("todo", `${todo.id}`);
  };
  return (
    <Link
      to={`${props.todo.columnId}/${props.todo.id}`}
      id={`${props.todo.id}`}
      draggable
      onDragStart={(e) => drag(e, props.todo)}
    >
      <div className={classes.todo__container}>
        <h3>
          {props.todo.position}/{props.todo.title}
        </h3>
      </div>
    </Link>
  );
}

export default BoardTodo;
