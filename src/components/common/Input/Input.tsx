import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
  classes?: CSSModuleClasses;
  onChange: (value: any) => void;
}

const Input: React.FC<Props> = (props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };
  return (
    <div className="input">
      <div className={props.classes?.fieldLabel}>{props.label}</div>
      <input
        className={props.classes?.fieldInput}
        type={props.type}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
