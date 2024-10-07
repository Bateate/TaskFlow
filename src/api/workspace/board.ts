import { CreateBoardRequestI, CreateBoardResponseI } from "../../utils/interfaces/req-res.interface";
import { BoardI } from "../../utils/interfaces/shared.interface";
import { onFetch } from "../../utils/onFetch";

const boardBaseUri = "http://localhost:3001/api/board";

export const createBoardRequest = async (body: CreateBoardRequestI) => {
  const reqParams = {
    url: `${boardBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<CreateBoardResponseI>(reqParams);
  return await res;
};

export const getBoardsByWorkspaceRequest = async (workspaceId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/workspace/${workspaceId}`,
    method: "GET",
  };
  const res = await onFetch<BoardI[]>(reqParams);
  return await res;
};

export const getBoardByIdRequest = async (boardId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
    method: "GET",
  };
  const res = await onFetch<BoardI>(reqParams);
  return await res;
};

export const editBoardRequest = async (body: BoardI) => {
  const reqParams = {
    url: `${boardBaseUri}/${body.id}`,
    method: "PUT",
    body: body
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const deleteBoardRequest = async (boardId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
