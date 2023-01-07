import "./CourseSection.css";
import coursevideo from "../Video/2.mp4";
function CourseSection() {
  return (
    <>
      <section className="CourseSection">
        <div className="container">
          <div className="heading">
            <div className="d-flex justify-content-between">
              <div class="txt">
                <p>Do you want to raise happy and healthy children?</p>
              </div>
              <div className="View-All">
                View All<i className="fa fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="heading-text">
                <h3>Enroll for our self-paced, curated courses</h3>
            </div>
            <div className="heading-card">
            <div className="row">
                <div className="col-md-3">
                    <div className="course-card">
                        <div className="course-card-image">
                            <video src={coursevideo}  controls="controls" className="img-fluid"></video>
                        </div>
                        <div className="course-details">
                        <div className="d-flex justify-content-between">
                            <div className="course-name">
                                <h6>The Informed Parenting Program</h6>
                            </div>
                            <div className="course-duration">
                                <p>6 hrs</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">2</div>
                <div className="col-md-3">3</div>
                <div className="col-md-3">4</div>
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CourseSection;