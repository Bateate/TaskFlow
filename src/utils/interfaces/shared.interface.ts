export interface BasicItemI {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WorkspaceI {
  id: string;
  title: string;
  creatorId: string;
  boards?: BoardI[];
}

export interface AllWorkspacesI {
  userWorkspaces: WorkspaceI[];
  sharedWorkspaces: WorkspaceI[];
}

export interface BoardI {
  id: number;
  title: string;
  workspaceId: string;
  columns?: ColumnI[];
}

export interface ColumnI {
  id: number;
  title: string;
  boardId: number;
  position: number;
  todos: TodoI[];
}

export interface TodoI {
  id: number;
  title?: string;
  description?: string;
  columnId: number;
  position: number;
}
