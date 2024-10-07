import { useRef } from "react";
import { Form, Link } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import classes from "./authShared.module.css";
import { LoginParamsI } from "../../../utils/interfaces/req-res.interface";

interface Props {
  isLoading: boolean;
  error: string | null;
  tryLogin: (params: LoginParamsI) => void;
}

function LoginForm(props: Props) {
  const loginParams = useRef<LoginParamsI>({
    username: "",
    password: "",
  });

  const usernameChangeHandler = (value: any) => {
    loginParams.current.username = value;
  };

  const passwordChangeHandler = (value: any) => {
    loginParams.current.password = value;
  };

  const onLoginHandler = () => {
    props.tryLogin(loginParams.current);
  };

  return (
    <Form className={classes.form__container}>
      <Input
        label="Account Name"
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
      <Button classes={classes} onClick={onLoginHandler}>
        {props.isLoading ? "Loading" : "Login"}
      </Button>
      <Link to="/auth/register">Create Account</Link>
    </Form>
  );
}

export default LoginForm;
