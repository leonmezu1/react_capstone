import axios from 'axios';

export const geckoGlobal = async () => {
  const globalData = await axios.get('https://api.coingecko.com/api/v3/global');

  const parsedGlobalData = await globalData.data;

  return parsedGlobalData;
};

export const geckoCoinsMarket = async (currency = 'usd', order = 'market_cap_desc') => {
  const currencyRequest = currency === '' ? 'usd' : currency;
  const orderRequest = order === '' ? 'market_cap_desc' : order;
  const coinsData = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyRequest}&order=${orderRequest}&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
  );

  const parsedCoinsData = await coinsData.data;

  return parsedCoinsData;
};

export const geckoCoin = async id => {
  console.log(id);
};
