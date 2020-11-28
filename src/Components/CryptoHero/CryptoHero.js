import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import textToBigCurrency from '../../Config/Helpers';
import style from './CryptoHero.module.css';

const CryptoHero = ({ redirectToCrypto }) => {
  const heroCoin = useSelector(state => state.CoinStoreState.global?.[0]);
  const symbol = useSelector(state => state.CoinStoreState.symbol);

  return (
    <div
      role="presentation"
      className={style.hero}
      onClick={() => redirectToCrypto(heroCoin.id)}
      onKeyDown={e => {
        if (e.key === 'Enter') redirectToCrypto(heroCoin.id);
      }}
    >
      <h2 className={style.heroTitle}>{heroCoin.name}</h2>
      <div className={style.heroContainer}>
        <div className={style.pictureContainer}>
          <img src={heroCoin.image} className={style.cryptoImg} alt="CryptoImage" />
        </div>
        <div className={style.infoContainer}>
          <span className={style.indicator}>Current price</span>
          <span className={style.infoValue}>
            {`${symbol}${textToBigCurrency(heroCoin.current_price)}`}
          </span>
          <span className={style.indicator}>High 24H</span>
          <div className={style.infoValue}>
            <span>
              {`${symbol}${
                heroCoin.high_24h ? textToBigCurrency(heroCoin.high_24h) : '0'
              } `}
            </span>
          </div>
          <span className={style.indicator}>Low 24H</span>
          <div className={style.infoValue}>
            <span>
              {`${symbol}${
                heroCoin.low_24h ? textToBigCurrency(heroCoin.low_24h) : '0'
              }`}
            </span>
          </div>
          <span className={style.indicator}>Market cap</span>
          <span className={style.infoValue}>
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
