/* eslint-disable no-console */
import axios from 'axios';

export const geckoGlobal = async () => {
  const globalData = await axios.get('https://api.coingecko.com/api/v3/global');

  const parsedGlobalData = await globalData.data;

  return parsedGlobalData;
};

export const geckoCoinsMarket = async (currency = 'usd', order = 'market_cap_desc') => {
  const coinsData = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
  );

  const parsedCoinsData = await coinsData.data;

  return parsedCoinsData;
};

export const geckoCoin = async id => {
  console.log(id);
};
