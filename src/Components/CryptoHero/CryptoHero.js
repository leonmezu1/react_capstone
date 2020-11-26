import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import './CryptoHero.css';
import textToBigCurrency from '../../Config/Helpers';

const CryptoHero = ({ redirectToCrypto }) => {
  const heroCoin = useSelector(state => state.CoinStoreState.global?.[0]);
  const symbol = useSelector(state => state.CoinStoreState.symbol);

  return (
    <div
      role="presentation"
      className="hero"
      onClick={() => redirectToCrypto(heroCoin.id)}
      onKeyDown={e => {
        if (e.key === 'Enter') redirectToCrypto(heroCoin.id);
      }}
    >
      <h2 className="hero-title text-center">{heroCoin.name}</h2>
      <div className="hero-container">
        <div className="picture-container">
          <img src={heroCoin.image} alt="CryptoImage" />
        </div>
        <div className="info-container">
          <span className="indicator">Current price</span>
          <span className="info-value">
            {`${symbol}${textToBigCurrency(heroCoin.current_price)}`}
          </span>
          <span className="indicator">High 24H</span>
          <div className="info-value">
            <span className="high">
              {`${symbol}${
                heroCoin.high_24h ? textToBigCurrency(heroCoin.high_24h) : '0'
              } `}
            </span>
          </div>
          <span className="indicator">Low 24H</span>
          <div className="info-value">
            <span className="low">
              {`${symbol}${
                heroCoin.low_24h ? textToBigCurrency(heroCoin.low_24h) : '0'
              }`}
            </span>
          </div>
          <span className="indicator">Market cap</span>
          <span className="info-value">
            {`${symbol}${textToBigCurrency(heroCoin.market_cap)}`}
          </span>
        </div>
      </div>
    </div>
  );
};

CryptoHero.propTypes = {
  redirectToCrypto: propTypes.func.isRequired,
};

export default CryptoHero;
