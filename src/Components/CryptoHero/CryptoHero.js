import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoHero.css';

const CryptoHero = () => {
  const heroCoin = useSelector(state => state.CoinStoreState.global?.[0]);
  const symbol = useSelector(state => state.CoinStoreState.symbol);

  return (
    <div className="hero">
      <h2 className="hero-title text-center">{heroCoin.name}</h2>
      <div className="hero-container">
        <div className="picture-container">
          <img src={heroCoin.image} alt="CryptoImage" />
        </div>
        <div className="info-container">
          <span className="indicator">Market cap</span>
          <span className="info-value">{`${symbol}${heroCoin.market_cap}`}</span>
          <span className="indicator">High - Low 24H</span>
          <div className="info-value">
            <span className="high">
              {`${symbol}${
                heroCoin.high_24h ? heroCoin.high_24h : '0'
              } `}

            </span>
            <span>&nbsp; - &nbsp;</span>
            <span className="low">
              {`${symbol}${
                heroCoin.low_24h ? heroCoin.low_24h : '0'
              }`}

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHero;
