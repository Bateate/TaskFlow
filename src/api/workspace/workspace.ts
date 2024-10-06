import { onFetch } from "../../utils/onFetch";
import * as workspaceI from "../../utils/interfaces/workspace.interface.ts";

const workspaceBaseUri = "http://localhost:3001/api/workspace";

export const createWorkspace = async (
  body?: workspaceI.CreateWorkspaceRequestI
) => {
  const reqParams = {
    url: `${workspaceBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch<workspaceI.CreateWorkspaceResponseI>(reqParams);
  return await res;
};

export const getAllWorkspaces = async () => {
  const reqParams = {
    url: `${workspaceBaseUri}`,
    method: "GET",
  };
  const res = await onFetch<workspaceI.CreateWorkspaceResponseI>(reqParams);
  return await res;
};

export const getWorkspacesById = async (id: string) => {
  const reqParams = {
    url: `${workspaceBaseUri}/${id}`,
    method: "GET",
  };
  const res = await onFetch<workspaceI.CreateWorkspaceResponseI>(reqParams);
  return await res;
};

export const deleteWorkspace = async (id: string) => {
  const reqParams = {
    url: `${workspaceBaseUri}/${id}`,
    method: "DELETE",
  };
  const res = await onFetch<workspaceI.CreateWorkspaceResponseI>(reqParams);
  return await res;
};
