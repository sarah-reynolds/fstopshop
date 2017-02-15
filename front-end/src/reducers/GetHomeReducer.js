export default (state=[], action)=>{
	console.log(action.type)
	switch(action.type){
		case 'GET_HOME':
		console.log("Im the get home reducer and some action called GET_HOME")
		return action.payload
	}
	return state;
}