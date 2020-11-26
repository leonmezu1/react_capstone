import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import './CryptoTile.css';
import textToBigCurrency from '../../Config/Helpers';

const CryptoTile = (
  {
    imgTag, name, currentPrice, classes, symbol, id, redirectToCrypto,
  },
  ref,
) => (
  <div
    className={`${classes} crypto-tile `}
    ref={ref}
    role="presentation"
    onClick={() => redirectToCrypto(id)}
    onKeyDown={e => {
      if (e.key === 'Enter') redirectToCrypto(id);
    }}
  >
    <img src={imgTag} alt="crypto-tile" className="tile-h" />
    <span className="crypto-tile-title">{name}</span>
    <span className="crypto-tile-price">
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
  classes: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  redirectToCrypto: propTypes.func.isRequired,
};

export default forwardedTile;
