import {types} from 'mobx-state-tree';
import {store} from '../components'

export const ProductModel = types.model('ProductModel',{

	id: types.identifier,
	name: types.string,
	url: types.number,
	price: types.number,
	qty: 0,
	desc:types.string,
	inCart:false

}).actions(self => ({

	incQty(){
		self.qty += 1 ;
	},
	decQty(){
		self.qty -= 1;
	},
	addToCart(){
		store.cartStore.addProduct(self);
		self.inCart = true;
		self.incQty();
	},
	removeFromCart(){
		store.cartStore.removeProduct(self);
		self.inCart = false;
		self.qty = 0;
	},

})).views(self => ({
	get totalPrice(){
		return(self.qty*self.price)
	},
}))