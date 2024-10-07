import { CreateWorkspaceRequestI, CreateWorkspaceResponseI } from "../../utils/interfaces/req-res.interface";
import { AllWorkspacesI, WorkspaceI } from "../../utils/interfaces/shared.interface";
import { onFetch } from "../../utils/onFetch";

const workspaceBaseUri = "http://localhost:3001/api/workspace";

export const createWorkspaceRequest = async (
  body?: CreateWorkspaceRequestI
) => {
  const reqParams = {
    url: `${workspaceBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<CreateWorkspaceResponseI>(reqParams);
  return await res;
};

export const getAllWorkspacesRequest = async () => {
  const reqParams = {
    url: `${workspaceBaseUri}`,
    method: "GET",
  };
  const res = await onFetch<AllWorkspacesI>(reqParams);
  return await res;
};

export const getWorkspacesByIdRequest = async (id: string) => {
  const reqParams = {
    url: `${workspaceBaseUri}/${id}`,
    method: "GET",
  };
  const res = await onFetch<WorkspaceI>(reqParams);
  return await res;
};

export const deleteWorkspaceRequest = async (id: string) => {
  const reqParams = {
    url: `${workspaceBaseUri}/${id}`,
    method: "DELETE",
  };
  const res = await onFetch<{}>(reqParams);
  return await res;
};
