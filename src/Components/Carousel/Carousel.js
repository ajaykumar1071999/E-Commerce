import "./Carousel.css";
import backimg from "../Images/2.svg";
import backimg1 from "../Images/3.svg";
import backimg2 from "../Images/4.svg";

function Carousel() {
  return (
    <>
      <section>
        <div className="d-flex justify-content-between relative">
          {/* first container */}
          <div
            className=""
            style={{
              width: "60%",
              backgroundImage: `url(${backimg2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          >
            {/* first-sub-container */}
            <div className="first-sub-container">
              <h3 style={{ fontWieght: "900" }}>
                Your partner in the key moments of your parenting journey
              </h3>
              <p>
                Helping parents thrive by reimagining access to life-changing{" "}
              </p>
              {/* First-sub-sub-container  */}
              <div className="first-sub-sub-container d-flex justify-content-around">
                <div>
                  200+
                  <pre>Experts</pre>
                </div>
                <div>
                  200+
                  <pre>Carers</pre>
                </div>
                <div>
                  200+k
                  <pre>Users</pre>
                </div>
              </div>
              <button
                className="btn btn-outline-danger"
                style={{ width: "200px" }}
              >
                Get Support
              </button>
            </div>
          </div>

          {/* second container */}

          <div
            style={{
              backgroundImage: `url(${backimg})`,
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        </div>

        {/* Second Section */}

        <div className="second-section">
          <div className="second-section-text">
            <h1>Trending On Tllid</h1>
          </div>
          <div className="second-section-slider"></div>
        </div>
      </section>
    </>
  );
}
export default Carousel;
