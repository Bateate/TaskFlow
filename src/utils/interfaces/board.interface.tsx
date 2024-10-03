export interface Board {
    title: string;
    id: string
    color?: string;
    isFavorite?: boolean;
}

export interface BoardProp {
    board: Board
}

export interface BoardsListProps {
    boards: Board[];
}
