import './TestimonialSection.css';
import sliderimg from '../Images/testimonial-1.png'
function TestimonialSection(){
    return (<>
        <section className='testimonial-section'>
            <div className='container'>
                <div className='heading'>
                    <h1>This is what parents are saying about Tllid</h1>
                </div>
                <div className='slider'>
                <div className='slider-content'>
                    <div className='slider-img'>
                        <img src={sliderimg} alt="slider-img" />
                    </div>
                    <div className='slider-img-content'>
                        <p>
                            “The Red Owl Parenting Course not only taught me how to become a better parent, it taught me how to become a better person. The life lessons in this course are invaluable and should be recommended to all parents. I thought I knew what it meant to be a dad, but there were so many opportunities for my personal growth. Thank You Red Owl!"
                        </p>
                        <div className='slider-img-content-author'>
                            <p>- Ajay Kumar</p>
                        </div>
                    </div>
                    
                </div>
                
                </div>
            </div>
        </section>
    </>);
}export default TestimonialSection;