import { CreateBoardRequestI, CreateBoardResponseI } from "../../utils/interfaces/req-res.interface";
import { BoardI } from "../../utils/interfaces/shared.interface";
import { onFetch } from "../../utils/onFetch";

const boardBaseUri = "http://localhost:3001/api/board";

export const createBoard = async (body: CreateBoardRequestI) => {
  const reqParams = {
    url: `${boardBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<CreateBoardResponseI>(reqParams);
  return await res;
};

export const getBoardsByWorkspace = async (workspaceId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/workspace/${workspaceId}`,
    method: "GET",
  };
  const res = await onFetch<BoardI[]>(reqParams);
  return await res;
};

export const getBoardById = async (boardId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
    method: "GET",
  };
  const res = await onFetch<BoardI>(reqParams);
  return await res;
};

export const editBoard = async (body: BoardI) => {
  const reqParams = {
    url: `${boardBaseUri}/${body.id}`,
    method: "PUT",
    body: body
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const deleteBoard = async (boardId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
