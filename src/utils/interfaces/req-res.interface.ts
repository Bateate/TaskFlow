import { BoardI, ColumnI, TodoI, WorkspaceI } from "./shared.interface";

// Login
export interface LoginParamsI {
  username?: string;
  password?: string;
}

export interface LoginResponseI {
  message: string;
  token: string;
}

// Register
export interface RegisterParamsI {
  email: string;
  username: string;
  displayName: string;
  password: string;
}

export interface RegisterResponseI {}

// Workspace
export interface CreateWorkspaceRequestI {
  title: string;
}

export interface CreateWorkspaceResponseI {
  message: string;
  newWorkspace: WorkspaceI;
}


// Board
export interface CreateBoardRequestI {
  title: string;
  workspaceId: string;
}

export interface CreateBoardResponseI {
  message: string;
  newBoard: BoardI;
}

// Column
export interface CreateColumnRequestI {
  title: string;
  boardId: number;
}

export interface CreateColumnResponseI {
  message: string;
  newColumn: ColumnI;
}

// Todo
export interface CreateTodoRequestI {
  title: string;
  columnId: number;
}

export interface CreateTodoResponseI {
  message: string;
  newTodo: TodoI;
}
