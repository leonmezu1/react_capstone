import {
  SET_GLOBAL_COIN, FETCHING, SET_GLOBAL_CURRENCY, SET_GLOBAL_ORDER,
} from '../Types';

export const setFetchingState = payload => ({
  type: FETCHING,
  payload,
});

export const setGlobalCoin = payload => ({
  type: SET_GLOBAL_COIN,
  payload,
});

export const setGlobalCurrency = payload => ({
  type: SET_GLOBAL_CURRENCY,
  payload,
});

export const setGlobalOrder = payload => ({
  type: SET_GLOBAL_ORDER,
  payload,
});
