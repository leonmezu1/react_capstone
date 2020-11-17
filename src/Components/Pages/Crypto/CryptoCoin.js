import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { geckoCoin } from '../../../Config/Axios';
import { setFetching } from '../../../Actions';
import Spinner from '../../Spinner/Spinner';

const CryptoCoin = () => {
  const { id } = useParams();
  const currency = useSelector(state => state.CoinStoreState.currency);
  const order = useSelector(state => state.CoinStoreState.order);
  const loading = useSelector(state => state.CoinStoreState.loading);
  const dispatch = useDispatch();

  const [coin, setCoin] = useState({});

  useEffect(async () => {
    dispatch(setFetching(true));
    const data = await geckoCoin(id, currency, order, 1);
    if (data) {
      setCoin(data[0]);
      dispatch(setFetching(false));
    }
  }, [currency, order]);

  return (
    <>
      <h1>{`Id is: ${id}`}</h1>
      {!loading && coin ? <h2>{`Coin loaded ${coin.symbol}`}</h2> : <Spinner />}
    </>
  );
};

export default CryptoCoin;
