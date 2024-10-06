import React, { PropsWithChildren } from "react";

interface Props {
  classes?: CSSModuleClasses
  onClick: () => void
}


const Button: React.FC<PropsWithChildren<Props>> = (props) => {
  return <button onClick={props.onClick} className={props.classes?.button}>{props.children}</button>;
};

export default Button;
