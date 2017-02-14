export default (state=[], action)=>{
	console.log(action.type)
	switch(action.type){
		case 'getSearch':
		console.log('Woohoo')
		return action.payload
	}
	return state;
}