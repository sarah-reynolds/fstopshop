import { combineReducers } from 'redux';
import AuctionSearchReducer from './AuctionSearchReducer'

const rootReducer = combineReducers({
	search: AuctionSearchReducer
});

export default rootReducer;