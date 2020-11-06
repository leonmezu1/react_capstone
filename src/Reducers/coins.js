import { SET_STORE_CRYPTO } from '../Types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STORE_CRYPTO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
