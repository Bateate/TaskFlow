import { Form, Link, redirect } from "react-router-dom";
import Modal from "../../../../components/common/Modal/Modal";
import classes from "./NewBoardCol.module.css";
import { createBoardRequest } from "../../../../api/workspace/board";
import { CreateBoardRequestI } from "../../../../utils/interfaces/req-res.interface";

function NewBoardCol() {
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

export default NewBoardCol;

export async function actions(
//     {
//   request,
//   params,
// }: {
//   request: Request;
//   params: { workspaceId: string };
// }
) {
//   const title = await (await request.formData()).get("title");
//   if (title) {
//     console.log("Title: ", title);

//     const postData: CreateBoardRequestI = {
//       title: title.toString(),
//       workspaceId: params.workspaceId,
//     };
//     const res = await createBoardRequest(postData);
//     if (res.error) return redirect("newBoard");
//     return redirect('..')
//   }
}
