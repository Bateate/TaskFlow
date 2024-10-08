import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getBoardByIdRequest } from "../../api/workspace/board";
import {
  BoardI,
  ColumnI,
  TodoI,
} from "../../utils/interfaces/shared.interface";
import classes from "./Board.module.css";
import { DefaultResponseI } from "../../utils/interfaces/req-res.interface";
import BoardCol from "./ui/BoardCol/BoardCol";
import { editTodoRequest } from "../../api/workspace/todo";
import { useState } from "react";

function Board() {
  const [dragEnd, setDragEnd] = useState(false)
  const loaderData = useLoaderData() as DefaultResponseI<BoardI>;
  const board = loaderData.data;
  console.log('456');

  const drop = async (
    e: React.DragEvent<HTMLSpanElement>,
    position: number,
    col: ColumnI
  ) => {
    console.log(position, col);

    e.preventDefault();
    const data = e.dataTransfer.getData("todo");
    console.log(data);
    const todoParams: TodoI = {
      id: Number(data),
      columnId: col.id,
      position: position >= 0 ? position : col.todos.length - 1,
    };
    await editTodoRequest(todoParams);
  };
  const dragEndHandelr = () => {
    console.log('123');
    
    setDragEnd(() => !dragEnd)
  }
  return (
    <div className={classes.board}>
      <h1>{board.title}</h1>
      <div className={classes.board__content__container}>
        {board?.columns?.map((col) => (
          <BoardCol
            key={`baordCol${col.id}`}
            column={col}
            onDrop={(e, posution) => drop(e, posution, col)}
            onDragEnd={dragEndHandelr}
          />
        ))}
        <Link to="newCol" className={classes.newColButton}>
          <h2>+ New Col</h2>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Board;

export async function loader({ params }: { params: { boardId: string } }) {
  const res = await getBoardByIdRequest(params.boardId);
  return (await res) as DefaultResponseI<BoardI>;
}
