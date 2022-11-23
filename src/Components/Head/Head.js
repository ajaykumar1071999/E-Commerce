import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Head.css";
import logo from "../Images/1.png";
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
      <div className="flex-container">
        <nav className="navbar navbar-expand-lg">
          <div>
            <img src={logo} />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item navigation">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item navigation">
                <a className="nav-link" href="#">
                  Consultations
                </a>
              </li>

              <li className="nav-item navigation">
                <a className="nav-link" href="#">
                  Activities
                </a>
              </li>
              <li className="nav-item navigation">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item navigation">
                <a class="nav-link" href="#">
                  Carers
                </a>
              </li>
              <li className="nav-item navigation">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li>
                <button className="btn btn-outline-danger navigation">
                  Get Support
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Head;
