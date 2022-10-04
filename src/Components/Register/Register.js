import react from "react";
import { useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function GetData(e) {
    console.log(name, email, password);
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Registration Form</h1>

      <input
        type="text"
        name="name"
        className="form-control"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
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
        type="password"
        name="password"
        className="form-control"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button className="btn btn-primary" onClick={GetData}>
        Submit
      </button>
    </div>
  );
}
export default Register;
