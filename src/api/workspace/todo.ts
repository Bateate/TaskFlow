import { onFetch } from "../../utils/onFetch";

const todoBaseUri = "http://localhost:3001/api/todo";

export const createTodo = async (body: {title: string, columnId: number, position: number}) => {
  const reqParams = {
    url: `${todoBaseUri}`,
    method: "POST",
    body: body
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const getTodoById = async (todoId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${todoId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const editTodo = async (
  todoId: number,
  body: { title: string; description: string }
) => {
  const reqParams = {
    url: `${todoBaseUri}/${todoId}`,
    method: "PUT",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const getTodoByCol = async (colId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${colId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};
export const deleteTodo = async (todoId: number) => {
  const reqParams = {
    url: `${todoBaseUri}/${todoId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
