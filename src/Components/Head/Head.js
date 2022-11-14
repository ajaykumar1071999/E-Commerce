import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Head.css";
function Head() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const showDate =
    date.getDate() + ":" + date.getMonth() + ":" + date.getFullYear();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="container">
          <Link to="/Table" className="link-container">
            Table
          </Link>

          <Link to="/Register" className="link-container">
            Register
          </Link>
          <Link to="/Login" className="link-container">
            Login
          </Link>
          <Link className="link-container"> Date :-{month}</Link>
          <Link className="link-container"> Time :-{showTime}</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Head;
