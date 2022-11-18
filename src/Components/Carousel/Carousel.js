import "./Carousel.css";
import backimg from "../Images/2.svg";
function Carousel() {
  return (
    <>
      <section>
        <div
          className="section"
          style={{
            backgroundImage: `url(${backimg})`,
            backgroundRepeat: "no-repeat",
            position: "covered"
          }}
        ></div>
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
