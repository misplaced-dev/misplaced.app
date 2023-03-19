import "./LoginForm.css";
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        const decoded = jwt_decode(token);
        console.log(decoded)

      }

      const onError = () => {
          console.log("error")
      }


  return (
    <div className="login-form-container">
      <form className="login-form" method="POST">
        <h2 className="login-form-header">Welcome back</h2>
        <label className="email-label" htmlFor="email">Email</label>
        <input
          className="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="password-label" htmlFor="password">Password</label>
        <input
          className="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="native-signin" type="submit" value="Login"/>
      </form>
      <p className="signup-link-container">Don't have an account? <a className="signup-link">Signup</a></p>
      <hr className="login-break"/>
        <GoogleLogin onSuccess={onSuccess} onError={onError}/>
    </div>
  );
};

export default LoginForm;