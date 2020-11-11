/* eslint-disable no-console */
import axios from 'axios';

export const geckoGlobal = async () => {
  const globalData = await axios.get('https://api.coingecko.com/api/v3/global');

  const parsedGlobalData = await globalData.data;

  return parsedGlobalData;
};

export const geckoCoinsMarket = async currency => {
  console.log(currency);
};

export const geckoCoin = async id => {
  console.log(id);
};
