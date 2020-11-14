import React from 'react';
import propTypes from 'prop-types';
import './Selector.css';

const Selector = ({ handleOrderChange, handleCurrencyChange }) => (
  <div className="selector-container">
    <div className="select-wrapper">
      <select name="order" id="orderSelector" onChange={handleOrderChange}>
        <option value="market_cap_desc">Market cap desc</option>
        <option value="market_cap_asc">Market cap asc</option>
        <option value="gecko_desc">Gecko cap desc</option>
        <option value="gecko_asc">Gecko cap asc</option>
        <option value="volume_desc">Volume desc</option>
        <option value="volume_asc">Volume asc</option>
        <option value="id_desc">ID desc</option>
        <option value="id_asc">ID asc</option>
      </select>
    </div>
    <div className="select-wrapper">
      <select
        name="currency"
        id="currencySelector"
        onChange={handleCurrencyChange}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="cop">COP</option>
        <option value="mxn">MXN</option>
        <option value="arg">ARG</option>
      </select>
    </div>
  </div>
);

Selector.propTypes = {
  handleOrderChange: propTypes.func.isRequired,
  handleCurrencyChange: propTypes.func.isRequired,
};

export default Selector;
