import { combineReducers } from 'redux';
import coinReducer from './coins';

export default combineReducers({
  CoinStoreState: coinReducer,
});
