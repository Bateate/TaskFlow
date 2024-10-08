import { useNavigate } from "react-router-dom";
import LoginForm from "./ui/LoginForm";
import { LoginParamsI } from "../../utils/interfaces/req-res.interface";
import { authenticateUser } from "../../services/userService";
function LoginPage() {
  const navigate = useNavigate();

  const onLoginHandler = async (params: LoginParamsI) => {
    const res = await authenticateUser(params);
    if (res.data?.token) {
      navigate("/");
    }
  };

  return (
    <LoginForm
      isLoading={false}
      error={null}
      tryLogin={(params) => onLoginHandler(params)}
    />
  );
}
export default LoginPage;
