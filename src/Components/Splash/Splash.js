import React from 'react';
import './Splash.css';

const img = './images/CoinGecko.png';

const Splash = () => (
  <div className="splash-wrapper animate__animated animate__fadeOut animate__delay-3s ">
    <div className="splash-screen">
      <img
        src={img}
        alt="Coingecko"
        className="animate__animated animate__backInDown"
      />
      <span className="animate__animated animate__backInUp splash-text shadowed-text">
        This site is powered by
        <span className="bolded"> CoinGecko </span>
        API
      </span>
    </div>
  </div>
);

export default Splash;
