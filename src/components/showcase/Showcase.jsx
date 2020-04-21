import React from 'react';
import './showcase.css';

// showcase imgs
import showcaseImageMobile from '../../assets/images/image-intro-mobile.jpg';
import showcaseImageDesktop from '../../assets/images/image-intro-desktop.jpg';


function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-container">
        <div className="showcase-col-one">
          <div className="showcase-img">
            {/* useState to conditionally change img src to desktop  */}
            <img src={showcaseImageMobile} alt="showcase image for mobile devices" />

          </div>
          <hr></hr>
          <div className="showcase-body">
            {/* svg bg top left of showcase body */}
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
            <a href="#!" className="btn">View Plans</a>
          </div>
        </div>

        <div className="showcase-col-two">
          <img src={showcaseImageDesktop} alt="showcase image for desktop" />
        </div>
      </div>
    </section>
  );

}

export default Showcase;