import React from "react";
import "./Login.scss";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginTop">
          <img
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            className="loginTopImage"
            alt=""
          />
          <span className="loginTopTitle">YouTube</span>
        </div>
        <span className="loginTitle">Sign in to YouTube</span>
        <button onClick={handleLogin} className="loginButton">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
