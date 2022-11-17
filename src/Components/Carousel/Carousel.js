import "./Carousel.css";
import backimg from "../Images/2.svg";
function Carousel() {
  return (
    <>
      <section
        className="section"
        style={{
          backgroundImage: `url(${backimg})`,
          backgroundRepeat: "no-repeat",
          position: "covered"
        }}
      >
        <div>
          <div></div>
        </div>
      </section>
    </>
  );
}
export default Carousel;
