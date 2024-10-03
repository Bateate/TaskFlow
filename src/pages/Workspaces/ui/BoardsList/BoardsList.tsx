import { BoardsListProps } from "../../../../utils/interfaces/board.interface";
import BoardCard from "../BoardCard/BoardCard";
import "./BoardsList.css";



function BoardsList({ boards }: BoardsListProps) {
  return (
    <ul className="boards-list">
      {boards.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </ul>
  );
}

export default BoardsList;
