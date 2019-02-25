import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar ,Image,StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {observer} from 'mobx-react/native';


@observer
 class CartCard extends Component {

   state = {
	Hover : false,
  };
 handleIncreament = () =>{
  	this.props.product.incQty();
  };

 handleDecreament = () =>{
  	this.props.product.decQty();
  };
  remove = () =>{
  	this.handleClose();
  	this.props.product.removeFromCart();
  }
  handleClose = () =>{
  	this.setState({
  		Hover:false
  	});
  };
  plusPress = () => {
  	this.setState ({Hover:true})
  	}
  render() {
  	const {Hover} = this.state;
  	const{product} = this.props;

    return (
    	
<TouchableWithoutFeedback onPress = {this.handleClose}>
	<Box dir="row" align="center" p="10" bg = "white">
		<Box f={0.3}>
			<Image style = {styles.image} source = {product.url}/>
		</Box>
		<Box pl ={20} f={1}>
			<Box ml = "md">
				<Text bold>{product.name}</Text>
				<Text size = "8">${product.price}</Text>
			</Box>
			<Box ml = "md">
				<TouchableOpacity onPress = {product.removeFromCart}>
					<Box dir = "row" align="center">
						<Feather name="trash-2" color = "#910226" size = {14}/>
						<Text size = {14}>Remove</Text>
					</Box>
				</TouchableOpacity>
			</Box>
		</Box>
		<Box mr="md" center>
      	{!Hover &&(
      		
			<TouchableOpacity onPress={this.plusPress}>
				<Box radius = {6}  w={40} h={30} center style = {{borderWidth:1,borderColor:'#abbad3'}}>
					<Text bold>{product.qty}</Text>
				</Box>
			</TouchableOpacity>

      		)}

       	{Hover && (
       		
			<Box shadow={0} bg = "white" radius={5} position = "absolute">
				<Box radius={6} style = {{borderWidth:1,borderColor:'#abbad3'}} mr = {40} dir = "row" align = "center" justify="between" p={2}>
       			{product.qty > 1 ? (
       				
					<TouchableOpacity onPress = {this.handleDecreament}>
						<Feather name="minus" color = "#910226" size = {20}/>
					</TouchableOpacity>
       				): (
       				
					<TouchableOpacity onPress = {this.remove}>
						<Feather name="trash-2" color = "#910226" size = {20}/>
					</TouchableOpacity>
       			)}
       			
					<Box radius = {6}  w={40} h={30} center >
						<Text bold>{product.qty}</Text>
					</Box>
					<TouchableOpacity onPress = {this.handleIncreament}>
						<Feather name="plus" color = "#910226" size = {20}/>
					</TouchableOpacity>
				</Box>
			</Box>
       		)}
      			
			<TouchableOpacity></TouchableOpacity>
		</Box>
		<Box>
			<Text bold>${product.totalPrice}</Text>
		</Box>
	</Box>
</TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
image:{
	width:100,
	height:100
}

});
 export default CartCard;