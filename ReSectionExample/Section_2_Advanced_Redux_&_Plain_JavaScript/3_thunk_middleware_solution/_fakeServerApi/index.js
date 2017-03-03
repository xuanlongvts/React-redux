var _fakeServerApi = {
	increaseCount: function(currentCount, cb){
		setTimeout(function(){
			cb(currentCount++);
		}, 2000)
	},

	decreaseCount: function(currentCount, cb){
		setTimeout(function(){
			cb(currentCount--);
		}, 2000)
	}
}
