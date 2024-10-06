export interface CreateWorkspaceRequestI {
    title: string
}

export interface CreateWorkspaceResponseI {
    message: string,
    newWorkspace: {
        id: string,
        title: string,
        creatorId: string,
        updatedAt: string,
        createdAt: string
    }
}
