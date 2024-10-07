import { onFetch } from "../../utils/onFetch";

const workspaceMembersBaseUri = "http://localhost:3001/api/workspaceMembers";

export const addMemberToWorkspaceRequest = async (body: {
  workspaceId: string;
  userId: string;
  role: string;
}) => {
  const reqParams = {
    url: `${workspaceMembersBaseUri}`,
    method: "POST",
    body: body,
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const getWorkspaceMembersRequest = async (workspaceId: string) => {
  const reqParams = {
    url: `${workspaceMembersBaseUri}/${workspaceId}`,
    method: "GET",
  };
  const res = await onFetch(reqParams);
  return await res;
};

export const removeMemberFromWorkspaceRequest = async (
  workspaceId: string,
  userId: string
) => {
  const reqParams = {
    url: `${workspaceMembersBaseUri}/${workspaceId}/${userId}`,
    method: "DELETE",
  };
  const res = await onFetch(reqParams);
  return await res;
};
