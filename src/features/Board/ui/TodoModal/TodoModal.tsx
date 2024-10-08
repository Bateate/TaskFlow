import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import {
  createTodoRequest,
  editTodoRequest,
  getTodoByIdRequest,
} from "../../../../api/workspace/todo";
import Modal from "../../../../components/common/Modal/Modal";
import {
  CreateTodoRequestI,
  DefaultResponseI,
} from "../../../../utils/interfaces/req-res.interface";
import classes from "./TodoModal.module.css";
import { TodoI } from "../../../../utils/interfaces/shared.interface";
import { useState } from "react";

function TodoModal() {
  const loaderData = useLoaderData() as DefaultResponseI<TodoI>;
  const todo = loaderData.data;
  // const todo = loaderData.data;

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <h2>Todo</h2>
        <label>Name</label>
        <input
          name="title"
          className={classes.boardNameInput}
          required
          defaultValue={todo.title}
        />
        <label htmlFor="body">Position</label>
        <input
          type="number"
          name="position"
          className={classes.boardNameInput}
          defaultValue={todo.position}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          className={classes.boardNameInput}
          required
          rows={3}
          defaultValue={todo.description}
        />
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default TodoModal;

export async function loader(params: { params: { todoId: number } }) {
  const res = await getTodoByIdRequest(params.params.todoId);
  return await res;
}

export async function actions({
  request,
  params,
}: {
  request: Request;
  params: { columnId: number; todoId: number };
}) {
  const formData = await await request.formData();
  const title = formData.get("title");

  if (title) {
    const postData: TodoI = {
      id: params.todoId,
      title: title.toString(),
      description: formData.get("description")?.toString(),
      position: Number(formData.get("position")),
      columnId: params.columnId,
    };
    const res = await editTodoRequest(postData);
    if (await res.error) return redirect(".");
    return redirect("..");
  }
  return null;
}
