import '../IntroTII/IntroTII.css';
import introvideo from '../Video/3.mp4';
function IntroTII(){
    return (
        <>
<section className='demo-video-section'>
<div className='container'>
    <div className='video-heading d-flex'>
        <h2 className='video-text'>What is Tllid?</h2>
    </div>
    <div className='video-content'>
        <video src={introvideo}  controls="controls" className="video-content-intro"></video>
    </div>
</div>
</section>
        </>
    );
}export default IntroTII;