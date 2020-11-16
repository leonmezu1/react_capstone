/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { queryError, setQuery } from '../Actions';

export const useCryptoPaginate = (pageNumber = 1) => {
  const currentCurrency = useSelector(state => state.CoinStoreState.currency);
  const currentOrder = useSelector(state => state.CoinsStoreState.order);
  useEffect(async () => {
    let cancelToken;
    let parsedCoinData;

    if (typeof cancelToken !== typeof undefined) { cancelToken.cancel('Operation canceled due to new request.'); }

    cancelToken = Axios.CancelToken.source();

    try {
      const coinData = await Axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=${currentOrder}&per_page=20&page=${pageNumber}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
        { cancelToken: cancelToken.token },
      );

      const parsedData = await coinData.data;

      parsedCoinData = parsedData;
    } catch (e) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Oops... ${e}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return parsedCoinData;
  }, [pageNumber]);
  return null;
};

export const useCryptoSearch = (query, pageNumber = 1) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const source = Axios.CancelToken.source();

    setLoading(true);
    setError(false);

    const loadData = () => {
      if (query !== '') {
        setTimeout(async () => {
          try {
            const res = await Axios({
              method: 'GET',
              url: `https://api.coingecko.com/api/v3/coins/${query}?localization=false&tickers=false&market_data=true&sparkline=true`,
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
            }
            setError(true);
          }
        }, 500);
      }
    };

    loadData();
    return () => source.cancel();
  }, [query, pageNumber]);

  return {
    loading, error, result,
  };
};

export default useCryptoPaginate;
