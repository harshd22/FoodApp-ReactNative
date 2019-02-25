import {ProductsStore} from './ProductsStore';
import {CartStore} from './CartStore';
import {OrdersStore} from './OrdersStore';
import {ProductModel} from '../models/Product';

const ordersStore = OrdersStore.create({products:[]});
const cartStore = CartStore.create({products:[]});
const productsStore = ProductsStore.create({

	data:[
		ProductModel.create({
			id:'1',
			name:"Chicken Tikka",
			url: require('../../assets/chicken_tikka.jpg'),
			price: 11,
			desc:"Buttery delicious chicken marinated in spices and tastes like heaven. Served with mint sauce and salad.",

		}),
		ProductModel.create({
			id:'2',
			name:"Butter Chicken",
			url: require('../../assets/butter.jpg'),
			price: 18,
			desc:"Buttery delicious tandoori chicken inside buttery sauce loved by your tastebuds. Served with Rice.",

		}),
			ProductModel.create({
			id:'3',
			name:"Naan Bread",
			url: require('../../assets/Naan.jpg'),
			price: 4,
			desc:"Buttery bread made in Tandoor",

		}),
		ProductModel.create({
			id:'4',
			name:"Roti",
			url: require('../../assets/Roti.jpg'),
			price: 3,
			desc:"Roti made in Tandoor",

		}),

	],
});

export const store = {

	cartStore,
	productsStore,
	ordersStore
};

window.MobxStore = store;