import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import textToBigCurrency from '../../Config/Helpers';
import style from './CryptoTile.module.css';

const CryptoTile = (
  {
    imgTag, name, currentPrice, symbol, id, redirectToCrypto,
  },
  ref,
) => (
  <div
    className={style.cryptoTile}
    ref={ref}
    role="presentation"
    onClick={() => redirectToCrypto(id)}
    onKeyDown={e => {
      if (e.key === 'Enter') redirectToCrypto(id);
    }}
  >
    <img src={imgTag} className={style.tileH} alt="crypto-tile" />
    <span className={style.cryptoTileTitle}>{name}</span>
    <span className={style.cryptoTilePrice}>
      {`${symbol}${textToBigCurrency(currentPrice)}`}
    </span>
  </div>
);

const forwardedTile = forwardRef(CryptoTile);

CryptoTile.propTypes = {
  imgTag: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  currentPrice: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  redirectToCrypto: propTypes.func.isRequired,
};

export default forwardedTile;
