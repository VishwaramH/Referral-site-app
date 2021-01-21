import React from 'react';
import { auth, provider } from '../firebase';
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message));
  }

  return (
    <div className="all">
      <h1 className="head">REFERRAL SITE</h1>
        <div className="login__page">
          <h1>LOGIN</h1>
          <button className="admin__login" onClick={signIn}>Login as an Admin</button>
          <button className="user__login" onClick={signIn}>Login as a User</button>
        </div>
    </div>
  )
}

export default Login;
