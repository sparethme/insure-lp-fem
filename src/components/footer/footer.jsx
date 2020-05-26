import React from 'react';
import './footer.css';

import companyLogo from '../../assets/images/logo.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import pinterestIcon from '../../assets/images/icon-pinterest.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-header">
          <div className="logo">
            <img src={companyLogo} />
          </div>
          <div className="social-media">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={pinterestIcon} alt="pinterest" />
            <img src={instagramIcon} alt="instagram" />
          </div>

        </div>

        {/* line break with line  */}
        <div className="long-hr"></div>
        {/* footer lists */}
        <div className="footer-lists">
          {/* footer list 1, missing anchor tags*/}
          <div className="footer-list">
            <h6>Our company</h6>
            <ul>
              <li><a href="#!">How we work</a></li>
              <li><a href="#!">Why Insure?</a></li>
              <li><a href="#!">View plans</a></li>
              <li><a href="#!">Reviews</a></li>
            </ul>
          </div>
          {/* footer list 2 */}
          <div className="footer-list">
            <h6>Help me</h6>
            <ul>
              <li><a href="#!">FAQ</a></li>
              <li><a href="#!">Terms of use</a></li>
              <li><a href="#!">Privacy policy</a></li>
              <li><a href="#!">Cookies</a></li>
            </ul>
          </div>

          {/* footer list 3 */}
          <div className="footer-list">
            <h6>Contact</h6>
            <ul>
              <li><a href="#!">Sales</a></li>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">Live chat</a></li>
            </ul>
          </div>
          {/* fooer list 4 */}
          <div className="footer-list">
            <h6>Others</h6>
            <ul>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Press</a></li>
              <li><a href="#!">Licences</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}


export default Footer