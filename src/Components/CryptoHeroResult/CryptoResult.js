import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import './CryptoResult.css';

const CryptoResult = ({ redirectToCrypto }) => {
  const heroCoin = useSelector(
    state => state.CoinStoreState.queryResultObject?.[0],
  );
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
      <h2 className="hero-title text-center">
        {heroCoin ? heroCoin.name : 'No results found'}
      </h2>
      {heroCoin && (
        <div className="hero-container">
          <div className="picture-container">
            <img src={heroCoin.image} alt="CryptoImage" />
          </div>
          <div className="info-container">
            <span className="indicator">Current price</span>
            <span className="info-value">
              {`${symbol}${heroCoin.current_price.toFixed(2)}`}
            </span>
            <span className="indicator">High 24H</span>
            <div className="info-value">
              <span className="high">
                {`${symbol}${
                  heroCoin.high_24h.toFixed(2) ? heroCoin.high_24h : '0'
                } `}
              </span>
            </div>
            <span className="indicator">Low 24H</span>
            <div className="info-value">
              <span className="low">
                {`${symbol}${
                  heroCoin.low_24h.toFixed(2) ? heroCoin.low_24h : '0'
                }`}
              </span>
            </div>
            <span className="indicator">Market cap</span>
            <span className="info-value">
              {`${symbol}${heroCoin.market_cap.toFixed(
                2,
              )}`}

            </span>
          </div>
        </div>
      )}
    </div>
  );
};

CryptoResult.propTypes = {
  redirectToCrypto: propTypes.func.isRequired,
};

export default CryptoResult;
