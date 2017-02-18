export default (state=[], action)=>{
	// console.log(action.type)
	// console.log(action.payload)
	switch(action.type){
		case 'LOGIN':
		// console.log(action.payload)
		return action.payload
	default:
		return state;
	}
}