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
  const loaderData = useLoaderData() as DefaultResponseI<BoardI>;
  const [dragedTodo, setDragedTodo] = useState<{
    todo: TodoI;
    colId: number;
  } | null>();
  const [board, setBoard] = useState<BoardI>(loaderData.data);

  const drop = async (
    e: React.DragEvent<HTMLSpanElement>,
    position: number,
    colId: number
  ) => {
    console.log(position, colId);

    e.preventDefault();
    const todoId = Number(e.dataTransfer.getData("todo"));
    const todoParams: TodoI = {
      id: todoId,
      columnId: colId,
      position: position,
    };
    await editTodoRequest(todoParams);
    const newBoard = setNewBoard(position, colId);
    setBoard(newBoard);
  };

  const setNewBoard = (newPosition: number, newColId: number) => {

    const newBoard: BoardI = {
      ...board,
      columns: board.columns?.map((col) => {
        if (col.id === newColId) {
          if (dragedTodo?.todo) {
            col.todos.splice(newPosition, 0, dragedTodo.todo);
          }
        }
        if (col.id === dragedTodo?.colId) {
          col.todos.splice(dragedTodo.todo.position, 1);
        }

        col.todos = col.todos.map((todo, index) => {
          return { ...todo, position: index };
        });
        return col;
      }),
    };
    return newBoard;
  };

  const onDrag = (todo: TodoI, colId: number) => {
    setDragedTodo({ todo, colId });
  };

  return (
    <div className={classes.board}>
      <h1>{board.title}</h1>
      <div className={classes.board__content__container}>
        {board?.columns?.map((col) => (
          <BoardCol
            key={`baordCol${col.id}`}
            column={col}
            onDrop={(e, posution, colId) => drop(e, posution, colId)}
            onDrag={(todo, colId) => onDrag(todo, colId)}
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

export async function loader({ params }: { params: { boardId: number } }) {
  const res = await getBoardByIdRequest(params.boardId);
  return (await res) as DefaultResponseI<BoardI>;
}
