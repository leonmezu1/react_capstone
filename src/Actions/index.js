import {
  SET_GLOBAL_COIN,
  FETCHING,
  SET_GLOBAL_CURRENCY,
  SET_GLOBAL_ORDER,
  SET_GLOBAL_SYMBOL,
  SET_QUERY,
  QUERY_ACTIVE,
  QUERY_ERROR,
  SET_PAGE_NUMBER,
} from '../Types';

const setCurrency = payload => ({
  type: SET_GLOBAL_CURRENCY,
  payload,
});

const setError = payload => ({
  type: QUERY_ERROR,
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

export const setQuery = payload => ({
  type: SET_QUERY,
  payload,
});

export const queryActive = payload => ({
  type: QUERY_ACTIVE,
  payload,
});

export const setPageNumber = payload => ({
  type: SET_PAGE_NUMBER,
  payload,
});

export const queryError = payload => dispatch => {
  dispatch(setError(payload));
  if (payload) dispatch(setQuery({}));
};
