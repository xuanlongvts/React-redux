import _products from './products.json';

const TIMEOUT = 100;

export default {
	getProducts: (cb, timeout) => 
		setTimeout(() => {
				cb(_products);
				// console.log('cb: ', cb);
				// console.log('_products: ', _products);
			}, timeout || TIMEOUT
		),
	buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)	
}