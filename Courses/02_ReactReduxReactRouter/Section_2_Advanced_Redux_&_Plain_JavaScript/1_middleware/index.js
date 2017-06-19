var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render(){
	var state = store.getState();

	console.log('state: ', state);

	document.getElementById('value').innerHTML = state.count.result;
	document.getElementById('value2').innerHTML = state.sum;

	if(state.count.loading){
		document.getElementById('status').innerHTML = 'is Loading...';
	}
	else{
		document.getElementById('status').innerHTML = 'Loaded';
	}

	document.getElementById('imagesStatus').innerHTML = state.images.loading;
	if(state.images.loading === 'loading...'){
		document.getElementById('imagesList').innerHTML = '';
	}
	else if(state.images.loading === 'loaded'){
		document.getElementById('imagesStatus').innerHTML = state.images.loading;
		var arrImages = [];
		for(var i = 0; i < state.images.data.length; i++){
			arrImages.push("<img src=" + state.images.data[i].link +" style='height: 200px;' />");
		}
		document.getElementById('imagesList').innerHTML = arrImages;
	}
}

render();
store.subscribe(render);