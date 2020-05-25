import React from 'react';
import './showcase.css';

// showcase imgs
import showcaseImageMobile from '../../assets/images/image-intro-mobile.jpg';
import showcaseImageDesktop from '../../assets/images/image-intro-desktop.jpg';
import BgIntroDesktopRight from '../../assets/images/bg-pattern-intro-right-desktop.svg';


function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-hero-img-m">
        {/* useState to conditionally change img src to desktop?  */}
        <img src={showcaseImageMobile} alt="showcase image for mobile devices" />
      </div>
      <div className="showcase-bg-d">
        <img src={BgIntroDesktopRight} alt="showcase image for mobile devices" />
      </div>

      <div className="showcase-content">
        <div className="container">
          <div className="col">
            <hr></hr>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
            <a href="#!" className="btn">View Plans</a>
          </div>

          {/* desktop hero image */}
          <div className="col">
            <div className="showcase-hero-img-d">
              <img src={showcaseImageDesktop} alt="showcase image for desktop" />
            </div>
          </div>

        </div>
      </div>


    </section>
  );

}

export default Showcase;