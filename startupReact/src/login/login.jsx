import React from "react";
import "./login.css";

export function Login() {
  return (
    <main className="login">
      <h1>Welcome!</h1>
      <form method="get" action="/">
        <div>
          <input type="text" placeholder="Name" className="login-input" />
        </div>
        <div>
          <input type="email" placeholder="Email" className="login-input" />
        </div>
        <div>
          <input type="password" placeholder="Password" className="login-input" />
        </div>
        <div>
          <button className="button" type="submit">
            Login
          </button>
        </div>
        <div>
          <button className="button" type="button" onClick={() => console.log("Create account clicked")}>Create</button>
        </div>
      </form>
    </main>
  );
};

export default Login;