// import classes from "../../styles/authShared.module.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userService";
import RegisterForm from "./ui/RegisterForm";
import { RegisterParamsI } from "../../utils/interfaces/req-res.interface";
function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (params: RegisterParamsI) => {
    const res = await registerUser(params);
    if (res.data) {
      navigate("/auth/login");
    }
  };
  return (
    <RegisterForm
      isLoading={false}
      error={null}
      tryRegister={onRegisterHandler}
    />
  );
}
export default RegisterPage;
