import {types} from 'mobx-state-tree';
import {ProductModel} from '../models/Product';
import {store} from '../components'

export const CartStore = types.model('CartStore',{

	products: types.array(types.reference(ProductModel)),
}).actions(self => ({

	addProduct(product){
		const entry = self.products.find(element => element.id === product.id);

		if(!entry){
			self.products.push(product);
		}
	},

	removeProduct(product){
		self.product = self.products.filter(element => element.id !== product.id);
		self.products.pop(product);
	},



})).views(self=>({

	get total(){
		return self.products.reduce((x,y)=> x + parseInt( y.totalPrice ),0)
	},

	get productsList(){
		return self.products.slice();
	}
}));