import { Outlet, useLoaderData } from "react-router-dom";
import { getBoardByIdRequest } from "../../../api/workspace/board";
import { DefaultResponseI } from "../../../utils/interfaces/req-res.interface";
import { BoardI } from "../../../utils/interfaces/shared.interface";

function BoardLayout() {
  const loaderData = useLoaderData() as DefaultResponseI<BoardI>;
  (loaderData.data);
  const board = loaderData.data;
  return (
    <>
      <h1>{board.title}</h1>

      <Outlet />
    </>
  );
}

export default BoardLayout;

export async function loader({ params }: { params: { boardId: string } }) {
  const res = await getBoardByIdRequest(params.boardId);
  return (await res) as DefaultResponseI<BoardI>;
}
