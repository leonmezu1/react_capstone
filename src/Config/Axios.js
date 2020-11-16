import axios from 'axios';
import Swal from 'sweetalert2';

export const geckoCoinsMarket = async (currency = 'usd', order = 'market_cap_desc', page = 1) => {
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
        sparkline: true,
        price_change_percentage: '24h',
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
