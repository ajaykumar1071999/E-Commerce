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
                  <div className="blog-video-1">
                    <video src={blogvideo} controls></video>
                  </div>
                  <div className="blog-details">
                    <div className="d-flex justify-content-between">
                      <div className="blog-badge">
                        <span>Early Years</span>
                      </div>
                      <div className="blog-badge"></div>
                    </div>
                    <div className="blog-tittle">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <div className="view-blog">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-md-3">
                <div className="blog-section-card-1">
                  <div className="blog-video-1">
                    <video src={blogvideo} controls></video>
                  </div>
                  <div className="blog-details">
                    <div className="d-flex justify-content-between">
                      <div className="blog-badge">
                        <span>Early Years</span>
                      </div>
                      <div className="blog-badge"></div>
                    </div>
                    <div className="blog-tittle">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <div className="view-blog">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
              </div>




              <div className="col-md-3">
                <div className="blog-section-card-1">
                  <div className="blog-video-1">
                    <video src={blogvideo} controls></video>
                  </div>
                  <div className="blog-details">
                    <div className="d-flex justify-content-between">
                      <div className="blog-badge">
                        <span>Early Years</span>
                      </div>
                      <div className="blog-badge"></div>
                    </div>
                    <div className="blog-tittle">
                      <h6>Managing Children with Autism Spectrum Conditions</h6>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <div className="view-blog">
                      <a href="#">View All</a>
                    </div>
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
