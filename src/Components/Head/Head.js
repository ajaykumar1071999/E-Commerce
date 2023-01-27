import { Link } from "react-router-dom";
import "./Head.css";
import logo from "../Images/logo.png";
function Head() {
  

  return (
    <>
      <section className="header-section">
        <header className="menu-header">
          <nav className="menu-nav">
            <div className="container container-wrap">
              <div className="navigation-menu">
                <div className="navigation-logo">
                  <Link to="/">
                    <img src={logo} alt="navigation logo" />
                  </Link>
                </div>
                <div className="navigation-item">
                  <div>
                    {" "}
                    <Link to="/">Home</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Courses">Courses</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Consultations">Consultations</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Activities">Activities</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Events">Events</Link>
                  </div>
                  <div>
                    {" "}
                    <Link to="/Careers">Careers</Link>
                  </div>
                </div>
                <div className="navigation-login">
                  <div>
                  <Link to="/Support">
                    <i class="fas fa-headset"></i>
                    </Link>
                  </div>
                  <div>
                  <Link to="/Login">
                    <i class="fas fa-user"></i>
                    </Link>
                  </div>
                </div>
                <span className="nav-menu-bar">
                <Link to="/">
                  <i class="fa-solid fa-bars"></i></Link>
                </span>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Head;
