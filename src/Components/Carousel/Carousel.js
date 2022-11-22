import "./Carousel.css";
import backimg from "../Images/2.svg";
import backimg1 from "../Images/1.png";
function Carousel() {
  return (
    <>
      <section>
        <div className="section"></div>

        <div
          className="section1"
          style={{
            backgroundImage: `url(${backimg})`,
            backgroundRepeat: "no-repeat",
            position: "covered"
          }}
        ></div>
      </section>
    </>
  );
}
export default Carousel;
