import React from 'react';
import './features.css';

import f1Icon from '../../assets/images/icon-snappy-process.svg';
import f2Icon from '../../assets/images/icon-affordable-prices.svg';
import f3Icon from '../../assets/images/icon-people-first.svg';

// bg svgs
import bgSvgRight from '../../assets/images/bg-pattern-intro-right-mobile.svg';

function FeatureCard(props) {
  return (
    <div className="card">
      <img src={props.cardIcon} alt={props.cardAlt} />
      <h2>{props.cardTitle}</h2>
      <p>{props.cardBody}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features">
      {/* have bg svgs outside container to place it at edge of screen */}
      {/* svg-right-mobile */}
      {/* <img src={bgSvgRight} className="bg-intro-right" /> */}
      <div className="features-container">
        <div className="features-content">
          <hr></hr>
          <h3>We're different</h3>
          <div className="card-deck">
            {/* card 1 */}
            <FeatureCard cardIcon={f1Icon} cardAlt="feature 1 image" cardTitle="Snappy Process" cardBody="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms." />
            {/* card 2 */}
            <FeatureCard cardIcon={f2Icon} cardAlt="feature 2 image" cardTitle="Affordable Prices" cardBody="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible." />
            {/* card 3 */}
            <FeatureCard cardIcon={f3Icon} cardAlt="feature 3 image" cardTitle="People First" cardBody="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;