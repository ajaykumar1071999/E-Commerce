import "./Carousel.css";
import backimg from "../Images/2.svg";
import backimg1 from "../Images/3.svg";
import backimg2 from "../Images/4.svg";

function Carousel() {
  return (
    <>
      <section>
        {/* <div class="relative">
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
        </div> */}
        <div className="d-flex justify-content-between relative">
          <div
            className=""
            style={{
              width: "50%",
              backgroundImage: `url(${backimg2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          ></div>

          <div
            style={{
              width: "50%",
              backgroundImage: `url(${backimg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
export default Carousel;
