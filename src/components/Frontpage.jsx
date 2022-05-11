
import logo from './marvinlogo.png';
function Frontpage(){
    
    return(
    <>
       {/* Navbar Section  */}
    <nav class="navbar">
      <div class="navbar__container">
        <a href="#home" id="navbar__logo"><img src={logo} className="nav-logo" alt="logo" /></a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar">
             
         </span> 
          {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="#home" class="navbar__links" id="home-page">HOME</a>
          </li>
          <li class="navbar__item">
            <a href="#about" class="navbar__links" id="about-page">ABOUT</a>
          </li>
          <li class="navbar__item">
            <a href="#services" class="navbar__links" id="services-page"
              >SERVICES</a>
          </li>
           <li class="navbar__item">
            <a href="#whyus" class="navbar__links" id="why-page"
              >WHY US</a>
          </li>
           <li class="navbar__item">
            <a href="#contact" class="navbar__links" id="contact-page"
              >CONTACT</a>
          </li>
          <li class="navbar__btn">
            <a href="#sign-up" class="button" id="signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>


     {/*  Section */}
    <div class="intro" id="home">
      <div class="intro__container">
        <h1 class="intro__heading">Welcome to MARVIN LANDSCAPING AND MAINTENANCE AND TREE CUTTING </h1>
      </div>
    </div>

     {/* About Section */}
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card"></div>
        </div>
        <div class="main__content">
          <h1>About</h1>
          <p>Marvin Landscaping has been providing professional landscaping concepts, designs and lawn care services to The Bronx area, residential and corporate communities. Marvin Landscaping prides itself on employing a team of uniformed workers who have a minimum of 3 years experience and training in lawn maintenance to secure the highest quality of lawn care. Our teams are directed by a team leader to ensure your property is receiving all the attention and management services you expect. Marvin Landscaping offers a wide range of services from curb-appeal concept and landscape design to the required nurturing and maintenance of your lawn and garden fertilization, as well as the palm pruning and removal for your home or corporate garden to constantly flourish.</p>
          
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div class="services" id="services">
      <h1>Our Services</h1>
      <div class="services__wrapper">
        <div class="services__card" id = "service1">
          <h2>Landscaping</h2>
          <p>Offers quality landscape design</p>
          <div class="services__btn"><button>More</button></div>
        </div>
        <div class="services__card" id = "service2">
          <h2>Tree Cutting</h2>
          <p>Offers tree trimming & removal services</p>
          <div class="services__btn"><button>More </button></div>
        </div>
        <div class="services__card" id = "service3">
          <h2>Deck</h2>
          <p> Stain, paint, or finish your deck</p>
          <div class="services__btn"><button>More</button></div>
        </div>
        
      </div>
      <br/>

      {/* row second service*/}
      <div class="services__wrapper">
        <div class="services__card" id = "service4">
          <h2>Contactor</h2>
          <p>Delivers the impeccable service people are looking for</p>
          <div class="services__btn"><button>More </button></div>
        </div>
        <div class="services__card" id = "service5">
          <h2>Patios</h2>
          <p>Outdoor space for dinning </p>
          <div class="services__btn"><button>More</button></div>
        </div>
        <div class="services__card"  id = "service6">
          <h2>Drive Ways</h2>
          <p>Nice concrete driveway has its own benefits</p>
          <div class="services__btn"><button>More </button></div>
        </div>
      </div>
      <br/>

      {/* row third service */}
      <div class="services__wrapper">
        <div class="services__card" id = "service7">
          <h2>Walls</h2>
          <p>Contact us to get a retaining wall to keep your yard in place! </p>
          <div class="services__btn"><button>More</button></div>
        </div>
        <div class="services__card" id = "service8">
          <h2>Fences</h2>
          <p>Provides security and privacy of your home</p>
          <div class="services__btn"><button>More</button></div>
        </div>
        <div class="services__card" id = "service9">
          <h2>Concrete</h2>
          <p>Expert to handle all of your residential or commercial concrete needs</p>
          <div class="services__btn"><button>More</button></div>
        </div>
      </div>
    </div>

    
    {/* why us section */}
    <div class="services" id="whyus">
      <h1>Why Choose Marvin ?</h1>
      <div class="services__wrapper">
        <div class="services__card">
           <i class="fa fa-asterisk" aria-hidden="true"></i>
          <h2>Personal Touch</h2>
          <p>Your complete satisfaction is important to us. If you need assistance, you can expect the highest level of attention and dedication — regardless of the size of your project — from every team member.</p>
         
        </div>
        <div class="services__card">
            <i class="fa fa-asterisk" aria-hidden="true"></i>
           <h2>Unique Solutions</h2>
           <p>We weigh all factors when designing your outdoor living space — from your intended use for the space to your property’s unique attributes and location — to create an interesting, unique, and practical solution.</p>
         </div>
        <div class="services__card">
            <i class="fa fa-asterisk" aria-hidden="true"></i>
            <h2>Effective Communications</h2>          
            <p>Communication is key to our successful, long-lasting relationships with clients. If you call with a question or need, we make it a priority and get back to you promptly.</p>
       </div>
        
      </div>
    </div>

    {/* Footer Section */}
    <div class="footer__container" id='contact'>
      <div class="footer__links">
        <div class="footer__link--wrapper">
         <div class="footer__link--items">
              
            <div>
            <a href="/"><img src={logo} alt="no images" className='nav-logo'/></a>
          </div>
          <p class="contact"><i class="fa fa-map-marker" aria-hidden="true"></i> Worcester, Massachusetts</p>
          <p class="contact"><i class="fa fa-phone-square" aria-hidden="true"></i> (508) 667 5507</p>
            <div class="social__icons">
            <a href="/" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="/" class="social__icon--link" ><i class="fab fa-instagram"></i ></a>
            <a href="/" class="social__icon--link"><i class="fab fa-youtube"></i ></a>
            <a href="/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
            <a href="/" class="social__icon--link"><i class="fab fa-twitter"></i></a>
          </div>
         </div>
          <div class="footer__link--items">
              
            <h2>Quick Links</h2>
            <a href="/sign__up">Home</a> 
            <a href="/">About</a>
            <a href="/">Service</a> 
            <a href="/">Why Us</a>
          </div>
          <div class="footer__link--items">
            <h2>Contact Us</h2>
            <form>
               <input type="email" placeholder="Your email address" style={{width: "370px", height: "30px"}}/><br/><br/>
               <textarea placeholder="Message..."style={{width: "370px", height: "60px"}}></textarea><br/>
               <button type="submit" className='sendbtn'>  Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
        
      </div>
      
      <p className="website__rights">© Copyright 2021 | Allright Reserved | Designed By: Uptech Solution</p>
    </div>
    
  
    </>
    
    );

    
}

export default Frontpage;