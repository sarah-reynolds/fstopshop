export default function GetSearchResaults(searchString){
	console.log("action running: ", searchString)
	return{
		type: 'getSearch',
		payload: []
	}
}