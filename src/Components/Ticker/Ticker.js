import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ticker from 'react-ticker';

import './Ticker.css';

const CoinsTicker = () => {
  const coins = useSelector(state => state.CoinStoreState.global);
  const currentCurrency = useSelector(state => state.CoinStoreState.currency);

  let symbol;

  switch (currentCurrency) {
    case 'usd':
      symbol = '$';
      break;
    case 'eur':
      symbol = '€';
      break;
    case 'mxn':
      symbol = '$ MXN ';
      break;
    default:
      symbol = '$';
      break;
  }

  useEffect(() => {}, [coins]);

  return (
    <div className="ticker-container">
      <div className="ticker-wrapper-static">
        <Ticker offset="10%" speed={6}>
          {() => (
            <p>
              {coins.map(coin => (
                <span key={coin.symbol}>
                  <span className="coin-symbol uppercase spaced">
                    {`${coin.symbol}: `}
                    {' '}
                  </span>
                  <span className="coin-price uppercase">
                    {` ${symbol}${coin.current_price}  `}
                  </span>
                </span>
              ))}
            </p>
          )}
        </Ticker>
      </div>
    </div>
  );
};

export default CoinsTicker;
