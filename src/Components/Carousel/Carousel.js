import "./Carousel.css";
import backimg from "../Images/2.svg";
import backimg1 from "../Images/3.svg";
import backimg2 from "../Images/4.svg";
import video from "../Video/1.mp4";
import firstimg from "../Images/first.png";
import secondimg from "../Images/second.png";
import thirdimg from "../Images/third.png";

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
              backgroundSize: "contain",
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
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </section>
      {/* Second Section */}

      <section className="event-section">
        <div className="container">
          <div className="heading-tittle d-flex align-items-center">
            <div className="badge-tittle"></div>
            <h2>Trending on Tllid</h2>
          </div>
        </div>

        <div className="home-page-even-slide mt-4">
          <div className="container">
            <div className="slider-content">
              <div className="badge-1">2hrs</div>
              <div className="event-body">
                <div className="d-flex">
                  <div className="video-contain">
                    <video controls>
                      <source src={video} type="video/mp4"></source>
                    </video>
                  </div>

                  <div className="event-details">
                    <h5>Event Tittle not Url</h5>

                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="badge bg-warning">sasas</div>
                      </div>
                      <div>
                        <div>
                          Rating: 5{" "}
                          <span style={{ fontSize: "20px" }}>&#9734;</span>
                        </div>
                      </div>
                    </div>
                    <p>fghjkldfghjkl;sdfghjkl</p>
                    <div className="event-btn">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="event-course">
        <div className="container">
          <div className="event-tag-text d-flex">
            <h2 className="event-tag-text-1">
              With you in every step of your journey
            </h2>
          </div>
          <div className="event-card-tag">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="tag-card">
                  <div className="tag-card-img">
                    <img src={firstimg} />
                    <h5>Try to Concive</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="tag-card">
                  <div className="tag-card-img">
                    <img src={secondimg} />
                    <h5>Pregnancy</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="tag-card">
                  <div className="tag-card-img">
                    <img src={thirdimg} />
                    <h5>Pregnancy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Carousel;
