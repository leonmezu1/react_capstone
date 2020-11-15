import {
  SET_GLOBAL_COIN, FETCHING, SET_GLOBAL_CURRENCY, SET_GLOBAL_ORDER, SET_GLOBAL_SYMBOL,
} from '../Types';

export default (state = { symbol: '$ ' }, action) => {
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
    default:
      return state;
  }
};
