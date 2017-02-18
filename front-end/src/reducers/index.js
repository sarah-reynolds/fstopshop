import { combineReducers } from 'redux';
import AuctionSearchReducer from './AuctionSearchReducer';
import GetHomeReducer from './GetHomeReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import GetAuctionReducer from './GetAuctionReducer';
import BidReducer from './BidReducer';

const rootReducer = combineReducers({
	search: AuctionSearchReducer,
	home: GetHomeReducer,
	register: RegisterReducer,
	login: LoginReducer,
	auctionItem: GetAuctionReducer,
	bid: BidReducer
});

export default rootReducer;