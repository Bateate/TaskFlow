import {
  CreateColumnRequestI,
  CreateColumnResponseI,
} from "../../utils/interfaces/req-res.interface";
import { ColumnI } from "../../utils/interfaces/shared.interface";
import { onFetch } from "../../utils/onFetch";

const colBaseUri = "http://localhost:3001/api/column";

export const createCol = async (body: CreateColumnRequestI) => {
  const reqParams = {
    url: `${colBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<CreateColumnResponseI>(reqParams);
  return await res;
};
export const getColByBoard = async (boardId: string) => {
  const reqParams = {
    url: `${colBaseUri}/${boardId}`,
    method: "GET",
  };
  const res = await onFetch<ColumnI>(reqParams);
  return await res;
};
export const editCol = async (body: ColumnI) => {
  const reqParams = {
    url: `${colBaseUri}/${body.id}`,
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
