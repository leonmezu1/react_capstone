import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { geckoCoin, geckoHistory } from '../../Config/Axios';
import { queryActive, setFetching } from '../../Actions';
import CryptoHistory from '../../Components/CryptoHistory/CryptoHistory';
import CryptoResult from '../../Components/CryptoHeroResult/CryptoResult';
import Spinner from '../../Components/Spinner/Spinner';
import textToBigCurrency from '../../Config/Helpers';
import style from './CryptoCoin.module.css';

const CryptoCoin = () => {
  const { id } = useParams();
  const currency = useSelector(state => state.CoinStoreState.currency);
  const order = useSelector(state => state.CoinStoreState.order);
  const loading = useSelector(state => state.CoinStoreState.loading);
  const activeQuery = useSelector(state => state.CoinStoreState.activeQuery);
  const symbol = useSelector(state => state.CoinStoreState.symbol);

  const dispatch = useDispatch();

  const history = useHistory();

  const [coin, setCoin] = useState({});
  const [coinData, setCoinData] = useState({});

  const formatData = data => data.map(el => ({
    t: el[0],
    y: el[1].toFixed(2),
  }));

  useEffect(async () => {
    dispatch(setFetching(true));
    dispatch(queryActive(false));
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
  }, [currency, order, id]);

  const redirectToCrypto = idCrypto => {
    history.push(`/crypto/${idCrypto}`);
  };

  const renderPrice = () => (
    <>
      {coin ? (
        <div className={style.gridderContainer}>
          <div className={style.gridder}>
            <div className="d-flex">
              <span className={style.coinDataCategory}>Current price: &nbsp;</span>
              <span>{`${symbol}${textToBigCurrency(coin.current_price)}`}</span>
            </div>
          </div>
          <div className={style.gridder}>
            <div className="d-flex">
              <span className={style.coinDataCategory}>
                Percentage change: &nbsp;
              </span>
              <span
                className={
                  coin.price_change_24h < 0
                    ? 'text-danger'
                    : 'text-success'
                }
              >
                {` ${coin.price_change_percentage_24h?.toFixed(2)}%`}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  const renderInfo = () => (
    <div className={style.gridderContainer}>
      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>High (24h)</span>
          <span className={style.coinData}>
            {`${symbol}${textToBigCurrency(coin.high_24h)}`}
          </span>
        </div>
      </div>
      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>Low (24h)</span>
          <span className={style.coinData}>
            {`${symbol}${textToBigCurrency(coin.low_24h)}`}
          </span>
        </div>
      </div>
      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>Market Cap</span>
          <span className={style.coinData}>
            {`${symbol}${textToBigCurrency(coin.market_cap)}`}
          </span>
        </div>
      </div>
      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>Total Supply</span>
          <span className={style.coinData}>
            {`${symbol}${
              coin.total_supply ? textToBigCurrency(coin.total_supply) : 0
            }`}
          </span>
        </div>
      </div>
      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>Volume (24H)</span>
          <span className={style.coinData}>
            {`${symbol}${textToBigCurrency(coin.total_volume)}`}
          </span>
        </div>
      </div>

      <div className={style.gridder}>
        <div className="d-flex">
          <span className={style.coinDataCategory}>Circulating Supply</span>
          <span className={style.coinData}>
            {`${symbol}${textToBigCurrency(coin.circulating_supply)}`}
          </span>
        </div>
      </div>
    </div>
  );

  const renderMainContent = () => (
    <div className={`container ${style.mainCoinContainer}`}>
      <span className={`text-left ${style.big}`}>{coin.name}</span>
      {!loading ? (
        <>
          <div className={style.historyContainer}>
            <CryptoHistory data={coinData} currency={currency} />
          </div>
          {renderPrice()}
          {renderInfo()}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );

  const renderResultCrypto = () => (
    <div className={`container ${style.mainCoinContainer}`}>
      <div className={style.currencyBox}>
        <div className={style.topCurrency}>
          <h2 className={style.currencyTitle}> Search results </h2>
          <CryptoResult redirectToCrypto={redirectToCrypto} />
        </div>
      </div>
    </div>
  );

  return <>{activeQuery ? renderResultCrypto() : renderMainContent()}</>;
};

export default CryptoCoin;
