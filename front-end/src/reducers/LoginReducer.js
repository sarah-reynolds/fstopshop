export default (state=[], action)=>{
	// console.log(action.type)
	// console.log(action.payload)
	switch(action.type){
		case 'LOGIN':
		console.log("login action.payload", action.payload)
		return action.payload
		case 'LOGOUT':
		return action.payload
	default:
		return state;
	}
}