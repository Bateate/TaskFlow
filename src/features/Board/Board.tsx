import { Outlet, useLoaderData } from "react-router-dom";
import { getBoardByIdRequest } from "../../api/workspace/board";
import { BoardI } from "../../utils/interfaces/shared.interface";
import classes from "./Board.module.css";
import { DefaultResponseI } from "../../utils/interfaces/req-res.interface";

function Board() {
  const loaderData = useLoaderData() as DefaultResponseI<BoardI>;
  console.log(loaderData.data);
  const board = loaderData.data;
  
  return <>
    <h1>{board.title}</h1>
    <Outlet />

  </>;
}

export default Board;

export async function loader({params}: {params: {boardId: string}}) {
  const res = await getBoardByIdRequest(params.boardId);
  return await res as DefaultResponseI<BoardI> 
}
