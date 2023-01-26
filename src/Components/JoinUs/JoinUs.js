import "./JoinUs.css";
import whatsapp from "../Images/whatsapp.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
function JoinUs() {
  return (
    <>
      <section className="join-us">
      <div className="join-us-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="join-us-heading">
                <h1>Join our parenting community</h1>
                <p>learn how to raise happy and healthy children</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="join-sharing-icon d-flex justify-content-between align-items-center">
                <div className="icon-image">
                  <img src={whatsapp} alt="whatsapp-image"/>
                </div>
                <div className="icon-image-empty"><span></span></div>
                <div className="icon-image">
                  <img src={instagram} alt="whatsapp-image"/>
                </div>
                <div className="icon-image-empty"><span></span></div>
                <div className="icon-image">
                  <img src={linkedin} alt="whatsapp-image"/>
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
export default JoinUs;
