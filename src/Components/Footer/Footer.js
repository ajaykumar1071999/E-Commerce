import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="col-container">
        <div className="col">
          <h2>Col-3</h2>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
        <div className="col">
          <h2>Col-3</h2>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
        <div className="col">
          <h2>Col-3</h2>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <div className="font">
            <Link>
              <i className="fa-brands fa-twitter "></i>
            </Link>
            <Link>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
