export default (state=[], action)=>{
	// console.log(action.type)
	switch(action.type){
		case 'GET_AUCTION_DETAIL':
		// console.log("Im the get home reducer and some action called GET_HOME")
		return action.payload
	default:
		return state;
	}
}