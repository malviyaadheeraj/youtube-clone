// import React from "react";
// import "./Login.scss";
// import { auth, provider } from "../../firebase";
// import { useDispatch } from "react-redux";
// import { login } from "../../features/userSlice";

// const Login = () => {
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     auth.signInWithPopup(provider).then(({ user }) => {
//       dispatch(
//         login({
//           displayName: user.displayName,
//           email: user.email,
//           photoUrl: user.photoUrl,
//         })
//       );
//     });
//   };

//   return (
//     <div className="login">
//       <button onClick={handleLogin}>Login With Google</button>
//     </div>
//   );
// };

// export default Login;
