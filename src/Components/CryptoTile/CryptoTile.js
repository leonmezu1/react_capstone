import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import './CryptoTile.css';

const CryptoTile = (
  {
    imgTag, name, currentPrice, classes, symbol, aos,
  },
  ref,
) => {
  const data = aos ? 'fade-up' : null;

  return (
    <div data-aos={data} className={`${classes} crypto-tile `} ref={ref}>
      <img src={imgTag} alt="crypto-tile" className="tile-h" />
      <span className="crypto-tile-title">{name}</span>
      <span className="crypto-tile-price">{`${symbol}${currentPrice}`}</span>
    </div>
  );
};

const forwardedTile = forwardRef(CryptoTile);

CryptoTile.propTypes = {
  imgTag: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  currentPrice: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
  classes: propTypes.string.isRequired,
  aos: propTypes.bool.isRequired,
};

export default forwardedTile;
