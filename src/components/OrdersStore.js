import {types} from 'mobx-state-tree';
import {ProductModel} from '../models/Product';

export const OrdersStore = types.model('OrdersStore' , {

	orders: types.array(types.reference(ProductModel)),

}).actions(self => ({

	addOrder(cart){
		self.orders.push(cart);
	}


}));