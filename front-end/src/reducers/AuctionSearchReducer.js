export default (state=[], action)=>{
	// console.log(action.type)
	switch(action.type){
		case 'GETSEARCH':
		// console.log('Woohoo')
		return action.payload
	default:
		return state;
	}
}