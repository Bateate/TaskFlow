import { onFetch } from "../../utils/onFetch";

const colBaseUri = "http://localhost:3001/api/column";

export const createCol = async (body: {
  title: string;
  baordId: number;
  position: number;
}) => {
  const reqParams = {
    url: `${colBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const getColByBoard = async (boardId: string) => {
  const reqParams = {
    url: `${colBaseUri}/${boardId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const editCol = async (
  colId: string,
  body: {
    title: string;
    baordId: number;
    position: number;
  }
) => {
  const reqParams = {
    url: `${colBaseUri}/${colId}`,
    method: "PUT",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const deleteCol = async (colId: string) => {
  const reqParams = {
    url: `${colBaseUri}/${colId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
