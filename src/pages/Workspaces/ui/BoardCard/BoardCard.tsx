import { BoardProp } from "../../../../utils/interfaces/board.interface";
import { Link } from "react-router-dom";
import "./BoardCard.css";

function BoardCard({ board }: BoardProp) {
  return (
    <Link to={"/board/" + board.id} className="board-card">
      {board.title}
    </Link>
  );
}

export default BoardCard;
