import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Nav className="mr-auto nav_bar_wrapper">
          <Link to="/Table">Table</Link>

          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
          <Link> Date :-{month}</Link>
          <Link> Time :-{showTime}</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Head;
