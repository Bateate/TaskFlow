import { Form, Link, redirect } from "react-router-dom";
import Modal from "../../../../components/common/Modal/Modal";
import classes from "./NewBoardTodo.module.css";
import { createBoardRequest } from "../../../../api/workspace/board";
import { CreateBoardRequestI } from "../../../../utils/interfaces/req-res.interface";

function NewBoardTodo() {
  console.log("asdasd");

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Board Name</label>
          <input name="title" className={classes.boardNameInput} required />
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
//   {
//   request,
//   params,
// }: {
//   request: Request;
//   params: { workspaceId: string };
// }
) {
  // const title = await (await request.formData()).get("title");
  // if (title) {
  //   console.log("Title: ", title);

  //   const postData: CreateBoardRequestI = {
  //     title: title.toString(),
  //     workspaceId: params.workspaceId,
  //   };
  //   const res = await createBoardRequest(postData);
  //   if (res.error) return redirect("newBoard");
  //   return redirect('..')
  // }
  return null
}
