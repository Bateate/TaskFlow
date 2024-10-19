export interface Props {
  classes: CSSModuleClasses;
  player: {
    id: number,
    symbol: string
  }
}

function Player({classes}: Props) {
  <li>
    <span className={classes.player}>
      <span className={classes.player__name}>1</span>
      <span className={classes.player__symbol}>X</span>
    </span>
    <button>Edit</button>
  </li>;
}

export default Player;
