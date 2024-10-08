import { Link } from "react-router-dom";
import { TodoI } from "../../../../utils/interfaces/shared.interface";
import classes from "./BoardTodo.module.css";

interface Props {
  todo: TodoI;
  onDrop: (e: React.DragEvent<HTMLSpanElement>, position: number) => void;
  onDrag: (todo: TodoI) => void;
  onDragOver: (e: React.DragEvent<HTMLSpanElement>) => void
}

function BoardTodo(props: Props) {
  const todo = props.todo;
  const drag = (e: React.DragEvent<HTMLSpanElement>) => {
    e.dataTransfer.setData("todo", `${todo.id}`);
    props.onDrag(todo);
  };
  return (
    <>
      <span
        className={classes.dropArea}
        onDrop={(e) => props.onDrop(e, todo.position)}
        onDragOver={props.onDragOver}
      ></span>
      <Link
        to={`${todo.columnId}/${todo.id}`}
        id={`${todo.id}`}
        draggable
        onDragStart={(e) => drag(e)}
      >
        <div className={classes.todo__container}>
          <h3>
            {todo.position}/{todo.title}
          </h3>
        </div>
      </Link>
    </>
  );
}

export default BoardTodo;
