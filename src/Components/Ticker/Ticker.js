import React from 'react';
import { useSelector } from 'react-redux';
import Ticker from 'react-ticker';
import style from './Ticker.module.css';

const CoinsTicker = () => {
  const coins = useSelector(state => state.CoinStoreState.global).slice(0, 19);
  const symbol = useSelector(state => state.CoinStoreState.symbol);

  return (
    <div className={style.tickerContainer}>
      <div className={style.tickerWrapperStatic}>
        <Ticker offset="10%" speed={6}>
          {() => (
            <p>
              {coins.map(coin => (
                <span key={coin.symbol}>
                  <span className={style.coinSymbol}>
                    {`${coin.symbol}: `}
                    {' '}
                  </span>
                  <span className={style.coinPrice}>
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
