import react from "react";
import { useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function GetData(e) {
    console.log(name, email, mobile);
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
        type="text"
        name="mobile"
        className="form-control"
        onChange={(e) => {
          setMobile(e.target.value);
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
