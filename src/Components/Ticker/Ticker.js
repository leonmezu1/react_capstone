import React from 'react';
import { useSelector } from 'react-redux';
import Ticker from 'react-ticker';

import './Ticker.css';

const CoinsTicker = () => {
  const coins = useSelector(state => state.CoinStoreState.global);

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
                    {` $${coin.current_price}  `}
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
