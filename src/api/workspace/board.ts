import { onFetch } from "../../utils/onFetch";

const boardBaseUri = "http://localhost:3001/api/board";

export const createBoard = async (body: {
  title: string;
  workspaceId: string;
}) => {
  const reqParams = {
    url: `${boardBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const getBoardByWorkspace = async (workspaceId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/workspace/${workspaceId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const getBoardById = async (boardId: string) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const editBoard = async (boardId: string, body: {title: string}) => {
  const reqParams = {
    url: `${boardBaseUri}/${boardId}`,
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
