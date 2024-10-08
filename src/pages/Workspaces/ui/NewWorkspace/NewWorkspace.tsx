import { Form, Link, redirect } from "react-router-dom";
import { createWorkspaceRequest } from "../../../../api/workspace/workspace";
import Modal from "../../../../components/common/Modal/Modal";
import { CreateWorkspaceRequestI } from "../../../../utils/interfaces/req-res.interface";
import classes from "./NewWorkspace.module.css";

function NewWorkspace() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <h2>New Workspace</h2>
        <p>
          <label htmlFor="body">Name</label>
          <input name="title" className={classes.boardNameInput} required/>
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

export default NewWorkspace;

export async function actions(
  {
  request,
}: {
  request: Request;
}
) {
  const formData = await (await request.formData());
  const title = formData.get('title')
  
  if (title) {

    const postData: CreateWorkspaceRequestI = {
      title: title.toString(),
    };
    const res = await createWorkspaceRequest(postData);
    if (res.error) return redirect(".");
    return redirect('..')
  }
  return null 
}
