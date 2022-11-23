import "./Carousel.css";
import backimg from "../Images/2.svg";
import backimg1 from "../Images/3.svg";
function Carousel() {
  return (
    <>
      <section>
        <div class="relative">
          <div
            class="absolute"
            style={{
              backgroundImage: `url(${backimg})`,
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div
            class="absolute"
            style={{
              backgroundImage: `url(${backimg1})`,
              backgroundRepeat: "no-repeat",
              top: "59.5%"
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
export default Carousel;
