import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar,Image,TouchableOpacity} from 'react-native';
import {inject,observer} from 'mobx-react/native';
import CartCard from '../components/CartCard';


@observer
 class ProductModal extends Component {
static navigationOptions = ({navigation}) => ({
	title: navigation.getParam('name','Item'),
})



  state = {};
  render() {
	add=()=>{
		product.incQty();
		alert("Added to the Card")
			NavigationService.back();
	}

  	const {navigation} = this.props;
  	const name = navigation.getParam('name','Item');
  	const price = navigation.getParam('price','Item');
  	const img = navigation.getParam('img');
  	const product = navigation.getParam('product');
    return (
      
<Box f={1} center bg="white">
	<StatusBar barStyle= "light-content"/>
	<Image source = {img}/>
	<Text bold>{product.name}</Text>
	<Text bold>${product.price}</Text>
	<Text p = {10}>{product.desc}</Text>
	<Box p = {70} >
		<TouchableOpacity  style= {{borderWidth:1 , borderColor:"black"}} onPress={add}>
			<Box bg="#910226">
				<Text  color = "white" bold p = {10}> Add To Order </Text>
			</Box>
		</TouchableOpacity>
	</Box>
</Box>
    );
  }
}
 export default ProductModal;