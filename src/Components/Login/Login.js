import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    console.log(email, password);
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Log in Form</h1>

      <input
        type="text"
        name="email"
        className="form-control"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="password"
        className="form-control"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="btn btn-success form-control" onClick={signIn}>
        Login
      </button>
    </div>
  );
}
export default Login;
