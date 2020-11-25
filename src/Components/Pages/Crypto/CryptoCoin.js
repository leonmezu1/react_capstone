import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { geckoCoin, geckoHistory } from '../../../Config/Axios';
import { setFetching } from '../../../Actions';
import Spinner from '../../Spinner/Spinner';
import CryptoHistory from '../../CryptoHistory/CryptoHistory';
import './CryptoCoin.css';

const CryptoCoin = () => {
  const { id } = useParams();
  const currency = useSelector(state => state.CoinStoreState.currency);
  const order = useSelector(state => state.CoinStoreState.order);
  const loading = useSelector(state => state.CoinStoreState.loading);

  const dispatch = useDispatch();

  const [coin, setCoin] = useState({});
  const [coinData, setCoinData] = useState({});

  const formatData = data => data.map(el => ({
    t: el[0],
    y: el[1].toFixed(2),
  }));

  useEffect(async () => {
    dispatch(setFetching(true));
    const data = await geckoCoin(id, currency, order);
    const {
      day, week, month, year,
    } = await geckoHistory(id, currency);
    setCoin(data[0]);
    setCoinData({
      day: formatData(day.data.prices),
      week: formatData(week.data.prices),
      month: formatData(month.data.prices),
      year: formatData(year.data.prices),
      detail: data[0],
    });
    dispatch(setFetching(false));
  }, [currency, order]);

  return (
    <div className="container main-coin-container">
      <h1 className="text-center">{coin.name}</h1>
      {!loading ? (
        <div className="history-container">
          <h2 className="text-left">Price history</h2>
          <CryptoHistory data={coinData} currency={currency} />
        </div>
      ) : (
        <Spinner />
      )}
      <div className="bg-white mt-3 p-2 rounded border row">
        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Market Cap</span>
            <span>{coin.market_cap}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Total Supply</span>
            <span>{coin.total_supply}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Volume(24H)</span>
            <span>{coin.total_volume}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">high 24h</span>
            <span>{coin.high_24h}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">
              Circulating Supply
            </span>
            <span>{coin.circulating_supply}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">low 24h</span>
            <span>{coin.low_24h}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCoin;
