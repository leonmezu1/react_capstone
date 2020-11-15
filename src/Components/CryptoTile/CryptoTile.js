import React from 'react';
import propTypes from 'prop-types';
import './CryptoTile.css';

const CryptoTile = ({
  imgTag, name, currentPrice, classes, symbol,
}) => (
  <div className={`crypto-tile ${classes}`}>
    <img src={imgTag} alt="crypto-tile" className="tile-h" />
    <span className="crypto-tile-title">{name}</span>
    <span className="crypto-tile-price">{`${symbol}${currentPrice}`}</span>
  </div>
);

CryptoTile.propTypes = {
  imgTag: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  currentPrice: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
  classes: propTypes.string.isRequired,
};

export default CryptoTile;
