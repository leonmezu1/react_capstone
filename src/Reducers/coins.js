import { SET_STORE_CRYPTO, SET_GLOBAL_COIN, FETCHING } from '../Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        loading: true,
      };
    case SET_STORE_CRYPTO:
      return {
        ...state,
        loading: false,
      };
    case SET_GLOBAL_COIN:
      return {
        ...state,
        global: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
