import './Head1.css';
import logo from '../Images/logo.png';
function Head(){
  return(
<>
  <section className="header-section">
    <header className='menu-header'>
    <nav className='menu-nav'>
      <div className='container'>
        <div className='navigation-menu'>
          <div className='navigation-logo'>
            <img src={logo} alt="navigation logo"/>
          </div>
          <div className='navigation-item'>
            <div>Home</div>
            <div>Courses</div>
            <div>Consultations</div>
            <div>Activities</div>
            <div>Events</div>
            <div>Careers</div>
          </div>
          <div className='navigation-login'>
            <div>
            <i class="fas fa-headset"></i>
            </div>
            <div>
            <i class="fas fa-user"></i>
            
            </div>
            
          </div>
          <span className='nav-menu-bar'><i class="fa-solid fa-bars"></i></span>
        </div>
      </div>
    </nav>
    
    </header>
  </section>
</>    
  );
}

export default Head;
