import { Board, BoardProp } from "../../../../utils/interfaces/board.interface";
import "./BoardCard.css"

function BoardCard({board}: BoardProp){
    return (
        <div className="board-card">
            {board.title}
        </div>
    )
}

export default BoardCard;