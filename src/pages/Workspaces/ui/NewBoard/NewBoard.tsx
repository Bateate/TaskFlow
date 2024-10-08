import { Form, Link, redirect } from "react-router-dom";
import Modal from "../../../../components/common/Modal/Modal";
import classes from "./NewBoard.module.css";
import { createBoardRequest } from "../../../../api/workspace/board";
import { CreateBoardRequestI } from "../../../../utils/interfaces/req-res.interface";

function NewBoard() {
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

export default NewBoard;

export async function actions(data: {
  request: Request;
  params: { workspaceId: string };
}) {
  const title = await (await data.request.formData()).get("title");
  if (title) {
    const postData: CreateBoardRequestI = {
      title: title.toString(),
      workspaceId: data.params.workspaceId,
    };
    const res = await createBoardRequest(postData);
    if (res.error) return redirect(".");
    return redirect("..");
  }
}
