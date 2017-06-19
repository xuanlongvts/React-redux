function Sum(currentState, action){

	var getParams = this.getParams();
	
	switch(action.type){
		case 'SUM':
			//ErrorMessage();
			return parseInt(action.a) + parseInt(action.b);
		default:
			return parseInt(getParams.a) + parseInt(getParams.b);
	}
}

function ErrorMessage(){
	throw Error('Happen an error from Sum');
}