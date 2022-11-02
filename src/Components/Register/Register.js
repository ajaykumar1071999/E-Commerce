import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // GetData();
  });
  function GetData(e) {
    e.preventDefault();

    console.log(name, email, mobile);
  }

  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h1>User Registration Form</h1>
        <form name="myForm" onSubmit={GetData} method="GET">
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {name.length >= 4 ? (
            <>
              <span style={{ color: "Green" }}>
                <i className="fa fa-check"></i>
              </span>{" "}
            </>
          ) : (
            <>
              <span style={{ color: "Red" }}>Enter Your Name</span>
            </>
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
          {email.length >= 10 ? (
            <>
              <span style={{ color: "Green" }}>
                <i className="fa fa-check"></i>
              </span>
            </>
          ) : (
            <>
              <span style={{ color: "Red" }}>Enter Your Email Address</span>
            </>
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
          {mobile.length >= 10 ? (
            <>
              <span>
                <i style={{ color: "green" }} className="fa fa-check"></i>
              </span>
            </>
          ) : (
            <>
              <span style={{ color: "Red" }}>Enter Your Mobile No.</span>
            </>
          )}
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
