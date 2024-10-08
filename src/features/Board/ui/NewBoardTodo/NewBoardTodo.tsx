import { Form, Link, redirect } from "react-router-dom";
import Modal from "../../../../components/common/Modal/Modal";
import classes from "./NewBoardTodo.module.css";
import { createBoardRequest } from "../../../../api/workspace/board";
import { CreateBoardRequestI, CreateTodoRequestI } from "../../../../utils/interfaces/req-res.interface";
import { createTodoRequest } from "../../../../api/workspace/todo";

function NewBoardTodo() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <h2>New Todo</h2>
        <p>
          <label htmlFor="body">Name</label>
          <input name="title" className={classes.boardNameInput} required/>
        </p>
        <p>
          <label htmlFor="body">Description</label>
          <textarea name="description" className={classes.boardNameInput} required rows={3}/>
        </p>
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

export default NewBoardTodo;

export async function actions(
  {
  request,
  params,
}: {
  request: Request;
  params: { columnId: number };
}
) {
  const formData = await (await request.formData());
  const title = formData.get('title')
  
  if (title) {

    const postData: CreateTodoRequestI = {
      title: title.toString(),
      description: formData.get('description')?.toString(),
      columnId: params.columnId
    };
    const res = await createTodoRequest(postData);
    if (res.error) return redirect("..");
    return redirect('..')
  }
  return null
}
