import { useEffect, useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function GetData(e) {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Mobile", mobile);
    console.log(name, email, mobile);
    e.preventDefault();
  }
  function nameHander(e) {
    let name = e.target.value;
  }
  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h1>User Registration Form</h1>
        <form onSubmit={GetData}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {name.length > 3 ? (
            <span style={{ color: "Green" }}>Good</span>
          ) : (
            <span style={{ color: "Red" }}>Not Good</span>
          )}
          <br />
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {email.length > 3 ? (
            <span style={{ color: "Green" }}>Good</span>
          ) : (
            <span style={{ color: "Red" }}>Not Good</span>
          )}
          <br />
          <input
            type="text"
            name="mobile"
            value={mobile}
            className="form-control"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          {mobile.length}
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}
export default Register;
