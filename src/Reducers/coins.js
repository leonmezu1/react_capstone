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

export default (
  state = {
    symbol: '$ ',
    order: 'market_cap_desc',
    currency: 'usd',
    pageNumber: 1,
  },
  action,
) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        loading: true,
      };
    case SET_GLOBAL_COIN:
      return {
        ...state,
        global: action.payload,
        loading: false,
      };
    case SET_GLOBAL_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        loading: false,
      };
    case SET_GLOBAL_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };
    case SET_GLOBAL_SYMBOL:
      return {
        ...state,
        symbol: action.payload,
        loading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        queryResultObject: action.payload,
      };
    case QUERY_ACTIVE:
      return {
        ...state,
        activeQuery: action.payload,
      };
    case QUERY_ERROR:
      return {
        ...state,
        queryError: action.payload,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return state;
  }
};
