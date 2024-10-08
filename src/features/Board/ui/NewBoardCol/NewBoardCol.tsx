import { Form, Link, redirect } from "react-router-dom";
import { createColRequest } from "../../../../api/workspace/column";
import Modal from "../../../../components/common/Modal/Modal";
import { CreateColumnRequestI } from "../../../../utils/interfaces/req-res.interface";
import classes from "./NewBoardCol.module.css";

function NewBoardCol() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <h2>New Column</h2>
        <p>
          <label htmlFor="body">Name</label>
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

export default NewBoardCol;

export async function actions({
  request,
  params,
}: {
  request: Request;
  params: { boardId: number };
}) {
  const title = await (await request.formData()).get("title");
  if (title) {
    const postData: CreateColumnRequestI = {
      title: title.toString(),
      boardId: Number(params.boardId),
    };
    const res = await createColRequest(postData);
    if (res.error) return redirect(".");
    return redirect("..");
  }
}
