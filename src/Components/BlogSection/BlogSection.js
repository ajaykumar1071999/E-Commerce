import "./BlogSection.css";
function BlogSection() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="blog-section-heading">
            <div className="d-flex justify-content-between">
              <div className="section-heading">
                <h5 className="section-head-1">Do you need childcare?</h5>
              </div>
              <div className="section-viewAll">
                Browse More
                <i className="fa fa-arrow-circle-right"></i>
              </div>
            </div>
            <h2 className="section-head-2">Speak to trusted Tllid carers</h2>
          </div>

          <div className="blog-section-card">
            <div className="row">
              <div className="col-md-3">
                <div className="blog-section-card-1">
                <div className="card-1-video">
                    <video src="https://www.youtube.com/embed/-l-BjvF44Tc" controls="control"></video>
                </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="blog-section-card-1"></div>
              </div>
              <div className="col-md-3">
                <div className="blog-section-card-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BlogSection;
