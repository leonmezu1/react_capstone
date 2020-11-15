import {
  SET_GLOBAL_COIN, FETCHING, SET_GLOBAL_CURRENCY, SET_GLOBAL_ORDER, SET_GLOBAL_SYMBOL,
} from '../Types';

const setCurrency = payload => ({
  type: SET_GLOBAL_CURRENCY,
  payload,
});

export const setGlobalSymbol = payload => ({
  type: SET_GLOBAL_SYMBOL,
  payload,
});

export const setGlobalCurrency = currency => dispatch => {
  switch (currency) {
    case 'usd':
      dispatch(setGlobalSymbol('$ '));
      break;
    case 'mxn':
      dispatch(setGlobalSymbol('$MXN '));
      break;
    case 'eur':
      dispatch(setGlobalSymbol('€ '));
      break;
    default:
      dispatch(setGlobalSymbol('$ '));
  }
  dispatch(setCurrency(currency));
};

export const setFetching = payload => ({
  type: FETCHING,
  payload,
});

export const setGlobalCoin = payload => ({
  type: SET_GLOBAL_COIN,
  payload,
});

export const setGlobalOrder = payload => ({
  type: SET_GLOBAL_ORDER,
  payload,
});
