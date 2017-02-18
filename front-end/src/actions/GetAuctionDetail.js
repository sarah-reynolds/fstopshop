import $ from 'jquery';

export default function (auctionId){
	var thePromise = $.getJSON('http://localhost:3000/getAuctionDetail/'+auctionId)
	// console.log(thePromise)
	return{
		type: 'GET_AUCTION_DETAIL',
		payload: thePromise
	}
}