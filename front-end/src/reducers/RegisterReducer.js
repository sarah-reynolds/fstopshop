export default (state=[], action)=>{
	console.log(action.type)
	switch(action.type){
		case 'REGISTER':
		// console.log("Im the register reducer and some action called REGISTER")
		console.log(action.payload)
		return action.payload
	}
	return state;
}