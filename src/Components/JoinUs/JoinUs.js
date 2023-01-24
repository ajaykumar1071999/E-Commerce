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

        <div className="join-us-content">
          <div className="join-us-content-heading">
            <h1>Join our parenting community</h1>
            <p>learn how to raise happy and healthy children</p>
          </div>
          
        </div>

        </div>
        <div className="col-md-4">
        <div className="join-img">
            <div className="whatsapp">
                <img src={whatsapp} alt="whatsapp"/>
            </div>
            <div><img src={instagram} alt="instagram"/></div>
            <div><img src={linkedin} alt="linkedin"/></div>
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
