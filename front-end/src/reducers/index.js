import { combineReducers } from 'redux';
import AuctionSearchReducer from './AuctionSearchReducer';
import GetHomeReducer from './GetHomeReducer';
import RegisterReducer from './RegisterReducer'

const rootReducer = combineReducers({
	search: AuctionSearchReducer,
	home: GetHomeReducer,
	register: RegisterReducer
});

export default rootReducer;