import classes from "./TicTacToe.module.css";

function TicTacToe() {
  return (
    <div>
      <div className={classes.game__container}>
        <ol className={classes.players}>
          
          <li>
            <span className={classes.player}>
              <span className={classes.player__name}>2</span>
              <span className={classes.player__symbol}>O</span>
            </span>
            <button>Edit</button>

          </li>
        </ol>
      </div>
    </div>
  );
}

export default TicTacToe;
