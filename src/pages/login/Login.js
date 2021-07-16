import React from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <button onClick={handleLogin}>Login With Google</button>
    </div>
  );
};

export default Login;
