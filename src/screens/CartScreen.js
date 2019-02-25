import React, { Component } from 'react';
import {StatusBar,FlatList,TouchableOpacity} from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import {inject,observer} from 'mobx-react/native';
import CartCard from '../components/CartCard'
import {NavigationService} from '../NavigationService';


@inject('cartStore')
@observer
 class CartScreen extends Component {
 	static navigationOptions = ({navigation}) => ({
	title: "Cart",
});


  renderList = () => {
  	 const{cartStore} = this.props;
  	 if(cartStore.totalProducts === 0){
  	 	return(
  	 		<Box center f={1}>
  	 			<Text>Cart Is Empty</Text>
  	 		</Box>
  	 		)
  	 }
return(
  	 	 <FlatList
  	 	 	 data = {cartStore.productsList} 
  	 	 	 renderItem = {({item}) => <CartCard product={item}/>}
  	 	 	 keyExtractor = {item => String(item.id)}
  	 	 	 extraData = {cartStore}
  	 	 	 />
  	 	 );
  }

  checkoutBtn=()=>{
  	const {cartStore} = this.props;

   	if(cartStore.totalProducts === 0){
  		return null;
  	}else{
  		return (
  			<Box bg = "white" p="xs">
  				<TouchableOpacity>
  					<Box h ={45} bg="#910226" center radius = {6}>
  						<Text bold color = "white">Checkout</Text>
  					</Box>
  				</TouchableOpacity>
  					<Box position= "absolute" bg="red" center p="xs" radius={6} style={{ top:10,right:12}} >
  					<Text color="white" size="xs">${cartStore.total}</Text>
  						
  					</Box>
  			</Box>
  			)
  	}
  }
  confirm = () =>{
  	if(this.props.cartStore.total > 0){
  		NavigationService.navigate('Confirmation', {name:this.props.title})
  	}else{
  		alert("Cart is empty");
  	}
  	

  }




  render() {
const {cartStore} = this.props;

    return (
      <Box f={1} bg="white">
      <StatusBar barStyle=  "light-content"/>
       {this.renderList()}


       <Box bg = "white" p="xs">
  				<TouchableOpacity onPress ={this.confirm}>
  					<Box h ={45} bg="#910226" center radius = {6}>
  						<Text bold color = "white">Checkout</Text>
  					</Box>
  				</TouchableOpacity>
  					<Box position= "absolute" bg="red" center p="xs" radius={6} style={{ top:10,right:12}} >
  					<Text color="white" size="xs">${cartStore.total}</Text>
  						
  					</Box>
  			</Box>
  			
      </Box>
    );
  }
}
 export default CartScreen;