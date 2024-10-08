import {
  CreateTodoRequestI,
  CreateTodoResponseI,
} from "../../utils/interfaces/req-res.interface";
import { TodoI } from "../../utils/interfaces/shared.interface";
import { onFetch } from "../../utils/onFetch";

const todoBaseUri = "http://localhost:3001/api/todo";

export const createTodoRequest = async (body: CreateTodoRequestI) => {
  const reqParams = {
    url: `${todoBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<CreateTodoResponseI>(reqParams);
  return await res;
};
export const getTodoByIdRequest = async (todoId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${todoId}`,
    method: "GET",
  };
  const res = await onFetch<TodoI>(reqParams);
  return await res;
};
export const editTodoRequest = async (body: TodoI) => {
  const reqParams = {
    url: `${todoBaseUri}/${body.id}`,
    method: "PUT",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const getTodoByColRequest = async (colId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${colId}`,
    method: "GET",
  };
  const res = await onFetch<TodoI[]>(reqParams);
  return await res;
};
export const deleteTodoRequest = async (todoId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${todoId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
