import {
  getAllWorkspacesRequest,
  getWorkspacesByIdRequest,
} from "../api/workspace/workspace";

export const getUserWorkspaces = async () => {
  const response = await getAllWorkspacesRequest();
  return response;
};

export const getWorkspaceById = async (workspaceId?: string) => {
  if (!workspaceId) return;
  const response = await getWorkspacesByIdRequest(workspaceId);
  return response;
};
