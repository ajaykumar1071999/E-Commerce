import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Images/logo.png";
function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-details">
                <div className="footer-img">
                  <img src={logo} alt="logo" />
                </div>

                {/* footer input box */}
                <form>
                  <div className="footer-subscription">
                    <input type="email" placeholder="Enter email address" />
                    <button>Join now</button>
                  </div>
                </form>
                <div className="footer-description">
                  <p>
                    Supporting parents in the key moments of their parenting
                    journey
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Term and Condition
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Refund Policy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Call Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Email Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Our Office
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Why Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right"></i>
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 copy-right">
              <div className="col-md-12">
                <p className="mb-0">Powered By NeuSpurt All right reserved © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
