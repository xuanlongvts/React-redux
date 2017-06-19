var _fakeServerApi = {
	increaseCount: function(currentCount, cb){
		setTimeout(function(){
			cb(); 
		}, 2000);
	}
}