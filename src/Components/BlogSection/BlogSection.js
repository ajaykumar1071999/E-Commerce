import "./BlogSection.css";
import blogvideo from "../Video/3.mp4";
function BlogSection() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="blog-section-heading">
            <div className="d-flex justify-content-between">
              <div className="section-heading">
                <h5 className="section-head-1">
                  Are you curious about parenting?
                </h5>
              </div>
              <div className="section-viewAll">
                Browse More
                <i className="fa fa-arrow-circle-right"></i>
              </div>
            </div>
            <h2 className="section-head-2">
              Access our library for blogs and videos
            </h2>
          </div>
          <div className="blog-section-card">
            <div className="row">
              <div className="col-md-3">
                <div className="blog-section-card-1">
                  <div className="card-1-video">
                    <video
                      src={blogvideo}
                      controls="control"
                    ></video>
                  </div>
                  <div className="container">
                    <div className="blog-content">
                      <p className="blog-content-para">Early Years</p>
                    </div>
                    <div className="blog-content-heading">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                    <div className="view-blog">View Blog</div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="blog-section-card-1">
                  <div className="card-1-video">
                    <video
                      src={blogvideo}
                      controls="control"
                    ></video>
                  </div>
                  <div className="container">
                    <div className="blog-content">
                      <p className="blog-content-para">Early Years</p>
                    </div>
                    <div className="blog-content-heading">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                    <div className="view-blog">View Blog</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="blog-section-card-1">
                  <div className="card-1-video">
                    <video
                      src={blogvideo}
                      controls="control"
                    ></video>
                  </div>
                  <div className="container">
                    <div className="blog-content">
                      <p className="blog-content-para">Early Years</p>
                    </div>
                    <div className="blog-content-heading">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                    <div className="view-blog">View Blog</div>
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
export default BlogSection;
