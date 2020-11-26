import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import './Selector.css';

const Selector = ({ handleOrderChange, handleCurrencyChange }) => {
  const globalOrder = useSelector(state => state.CoinStoreState.order);
  const globalCurrency = useSelector(state => state.CoinStoreState.currency);
  return (
    <div className="selector-container">
      <div className="select-wrapper">
        <select name="order" id="orderSelector" onChange={handleOrderChange} value={globalOrder}>
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
          value={globalCurrency}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="mxn">MXN</option>
        </select>
      </div>
    </div>

  );
};

Selector.propTypes = {
  handleOrderChange: propTypes.func.isRequired,
  handleCurrencyChange: propTypes.func.isRequired,
};

export default Selector;
