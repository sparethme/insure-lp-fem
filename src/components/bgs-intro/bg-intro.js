import React from 'react';
import './bg-intro.css';

import BgIntroMobile from '../../assets/images/bg-pattern-intro-right-mobile.svg';

import BgIntroDesktopLeft from '../../assets/images/bg-pattern-intro-left-desktop.svg';

function BgIntro() {
  return (
    <div>
      <div id="side-pattern-mobile">
        <img src={BgIntroMobile} />
      </div>

      {/* <!-- bg intro left desktop --> */}
      <div id="side-pattern-desktop">
        <img src={BgIntroDesktopLeft} />
      </div>
    </div>
  )
};

export default BgIntro;