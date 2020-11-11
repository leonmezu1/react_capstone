import { SET_STORE_CRYPTO, SET_GLOBAL_COIN, FETCHING } from '../Types';

export const setFetchingState = payload => ({
  type: FETCHING,
  payload,
});

export const setGlobalCoin = payload => ({
  type: SET_GLOBAL_COIN,
  payload,
});

export const setStoreCrypto = payload => ({
  type: SET_STORE_CRYPTO,
  payload,
});
