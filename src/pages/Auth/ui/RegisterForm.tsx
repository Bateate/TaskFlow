import { useRef } from "react";
import Input from "../../../components/common/Input/Input";
import classes from "./authShared.module.css";
import { Form, Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import { RegisterParamsI } from "../../../utils/interfaces/req-res.interface";

interface Props {
  isLoading: boolean;
  error: string | null;
  tryRegister: (params: RegisterParamsI) => void;
}

function RegisterForm(props: Props) {
  const loginParams = useRef<RegisterParamsI>({
    email: "",
    username: "",
    displayName: "",
    password: "",
  });

  const emailChangeHandler = (value: any) => {
    loginParams.current.email = value;
  };
  const displayNameChangeHandler = (value: any) => {
    loginParams.current.displayName = value;
  };

  const usernameChangeHandler = (value: any) => {
    loginParams.current.username = value;
  };

  const passwordChangeHandler = (value: any) => {
    loginParams.current.password = value;
  };

  const onRegisterHandler = () => {
    props.tryRegister(loginParams.current);
  };

  return (
    <Form className={classes.form__container}>
      <Input
        label="Account Email"
        classes={classes}
        type="text"
        onChange={emailChangeHandler}
      ></Input>
      <Input
        label="Account DisplayName"
        classes={classes}
        type="text"
        onChange={displayNameChangeHandler}
      ></Input>
      <Input
        label="Account Username"
        classes={classes}
        type="text"
        onChange={usernameChangeHandler}
      ></Input>
      <Input
        label="Account Password"
        classes={classes}
        type="password"
        onChange={passwordChangeHandler}
      ></Input>
      <Button classes={classes} onClick={onRegisterHandler}>
        {props.isLoading ? "Loading" : "Login"}
      </Button>
      <Link to="/auth/login">Login</Link>
    </Form>
  );
}

export default RegisterForm;
