import $ from 'jquery';

export default function (searchData){
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3000/searchResults",
		data: searchData
	})
	return{
		type: 'GETSEARCH',
		payload: thePromise
	}
}