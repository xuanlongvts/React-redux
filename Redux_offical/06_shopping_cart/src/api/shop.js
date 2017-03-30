import _product from './products.json';

const TIMEOUT = 100;

export default{
	getProducts: (cb, timeout) => setTimeout(() => cb(_product), timeout || TIMEOUT),
	buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)	
}