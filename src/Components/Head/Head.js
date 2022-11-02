import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Head() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          <Link to="/Table">Table</Link>

          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Head;
