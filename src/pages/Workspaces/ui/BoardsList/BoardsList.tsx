import { BoardsListProps } from "../../../../utils/interfaces/board.interface";
import BoardCard from "../BoardCard/BoardCard";
import "./BoardsList.css";



function BoardsList({ boards }: BoardsListProps) {
  return (
    <ul className="boards-list">
      {boards.map((board, index) => (
        <BoardCard key={index} board={board} />
      ))}
    </ul>
  );
}

export default BoardsList;
