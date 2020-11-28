import axios from 'axios';
import Swal from 'sweetalert2';

export const geckoCoinsMarket = async (
  currency = 'usd',
  order = 'market_cap_desc',
  page = 1,
) => {
  const currencyRequest = currency === '' ? 'usd' : currency;
  const orderRequest = order === '' ? 'market_cap_desc' : order;
  const coinsData = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyRequest}&order=${orderRequest}&per_page=21&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
  );

  const parsedCoinsData = await coinsData.data;

  return parsedCoinsData;
};

export const geckoCoin = async (id, currency, order, pageNumber = 1) => {
  let parsedCoinData;
  try {
    const coinData = await axios({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/coins/markets?',
      params: {
        ids: id,
        per_page: 1,
        page: pageNumber,
        sparkline: false,
        order,
        vs_currency: currency,
      },
    });

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
};

export const geckoHistory = async (cryptoId, currency) => {
  const [day, week, month, year] = await Promise.all([
    axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart/`,
      {
        params: {
          vs_currency: currency,
          days: '1',
        },
      },
    ),
    axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart/`,
      {
        params: {
          vs_currency: currency,
          days: '7',
        },
      },
    ),
    axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart/`,
      {
        params: {
          vs_currency: currency,
          days: '30',
        },
      },
    ),
    axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart/`,
      {
        params: {
          vs_currency: currency,
          days: '365',
        },
      },
    ),
  ]);

  return {
    day,
    week,
    month,
    year,
  };
};
