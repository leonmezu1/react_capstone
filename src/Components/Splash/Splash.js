import React from 'react';
import style from './Splash.module.css';

const img = './images/CoinGecko.png';

const Splash = () => (
  <div className="splash-wrapper animate__animated animate__fadeOut animate__delay-3s ">
    <div className={style.splashScreen}>
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
