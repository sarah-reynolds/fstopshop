import $ from 'jquery';

export default function (logout){

	return{
		type: 'LOGOUT',
		payload: logout
	}
}