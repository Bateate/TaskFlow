import {
  getAllWorkspacesRequest,
  getWorkspacesByIdRequest,
} from "../api/workspace/workspace";
import { DefaultResponseI } from "../utils/interfaces/req-res.interface";
import { AllWorkspacesI } from "../utils/interfaces/shared.interface";

export const getUserWorkspaces = async () => {
  const response = await getAllWorkspacesRequest();
  return response as DefaultResponseI<AllWorkspacesI>;
};

export const getWorkspaceById = async (workspaceId?: string) => {
  if (!workspaceId) return;
  const response = await getWorkspacesByIdRequest(workspaceId);
  return response;
};
