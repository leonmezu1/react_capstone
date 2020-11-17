/* eslint-disable no-unused-expressions */
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { queryError, setFetching, setQuery } from '../Actions';

export const useCryptoPaginate = (currency, order, pageNumber = 1) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setResults([]);
  }, [currency, order]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    Axios({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/coins/markets?',
      params: {
        vs_currency: currency,
        page: pageNumber,
        order,
        per_page: 21,
        sparkline: false,
        price_change_percentage: '1h%2C24h%2C7d',
      },
      cancelToken: new Axios.CancelToken(c => {
        cancel = c;
      }),
    })
      .then(res => {
        setResults(prev => [...new Set([...prev, ...res.data])]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (Axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [currency, order, pageNumber]);

  return {
    loading,
    error,
    results,
    hasMore,
  };
};

export const useCryptoSearch = (query, pageNumber = 1) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  const currency = useSelector(state => state.CoinStoreState.currency);
  const order = useSelector(state => state.CoinStoreState.order);
  const fetching = useSelector(state => state.CoinStoreState.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const source = Axios.CancelToken.source();
    setLoading(true);
    setError(false);
    if (fetching === false) dispatch(setFetching(true));

    const loadData = () => {
      if (query !== '') {
        setTimeout(async () => {
          try {
            const res = await Axios({
              method: 'GET',
              url: 'https://api.coingecko.com/api/v3/coins/markets?',
              params: {
                ids: query,
                per_page: 1,
                page: pageNumber,
                sparkline: true,
                price_change_percentage: '24h',
                order,
                vs_currency: currency,
              },
              cancelToken: source.token,
            });

            if (await res.data) {
              dispatch(setQuery(res.data));
              dispatch(queryError(false));
              setResult(res.data);
              setLoading(false);
            }
          } catch (error) {
            if (!Axios.isCancel(error)) {
              dispatch(queryError(true));
              setError(true);
            }
          }
        }, 500);
      } else {
        dispatch(setFetching(false));
      }
    };

    loadData();
    return () => source.cancel();
  }, [query, pageNumber]);

  return {
    loading,
    error,
    result,
  };
};

export default useCryptoPaginate;
