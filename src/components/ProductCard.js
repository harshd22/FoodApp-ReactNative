import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar,Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {products} from '../constants/images'
import { Feather} from '@expo/vector-icons';
import {observer} from 'mobx-react/native';

@observer
 class ProductCard extends Component {

  state = {
	Hover : false,
  };

modal = () =>{
		NavigationService.navigate('Modal', {name:this.props.product.name,
											price:this.props.product.price,
											img:this.props.product.url,
										product:this.props.product});
}

  plusPress = () => {
  	this.setState ({Hover:true})

  	if(this.props.product.qty === 0){
  		this.props.product.addToCart();
  	}
  	
  };

  handleIncreament = () =>{
  	this.props.product.incQty();
  };

 handleDecreament = () =>{
  	this.props.product.decQty();
  };

  handleClose = () =>{
  	this.setState({
  		Hover:false
  	});
  };

  remove = () =>{
  	this.handleClose();
  	this.props.product.removeFromCart();
  }
  render() {

  	const {product} =  this.props;
  	const {Hover} = this.state;

    return (

      
<Box bg = "white" w = {400} p = {5} mx= {5} position= "relative">
	<TouchableWithoutFeedback onPress= {this.handleClose}>
		<Box dir="row" align="center" p="10" bg = "white" >
			<TouchableOpacity onPress = {this.modal}>
				<Box f={0.3}>
					<Image 
      				style = {styles.image}
      				source = {product.url} />
				</Box>
			</TouchableOpacity>
			<Box pl ={20} f={1}>
				<Box ml="50">
					<Text bold> {product.name} </Text>
					<Text > ${product.price}</Text>
				</Box>
			</Box>
		</Box>
	</TouchableWithoutFeedback>
      	{!Hover &&(
      		
	<TouchableOpacity style = {styles.plus} onPress={this.plusPress}>
		<Box bg = {product.qty > 0 ? 'red' : 'white'} center circle= {35} style = {{borderColor : "#910226" , borderWidth:2}}>
       		{product.qty>0 ? (
       			
			<Text bold >{product.qty}</Text>
       			):(
       			
			<Feather name = "plus" size = {20} color = "#910226"/>
       		)}
      	    
		</Box>
	</TouchableOpacity>

      		)}

       	{Hover && (
       		
	<Box h = {45}shadow={0} bg = "white" radius={5} style = {{top:0,right:10,left:10,zIndex:99}} >
		<Box dir = "row" align = "center" justify="between" p={2}>
       			{product.qty > 1 ? (
       				
			<TouchableOpacity onPress = {this.handleDecreament}>
				<Feather name="minus" color = "#910226" size = {27}/>
			</TouchableOpacity>
       				): (
       				
			<TouchableOpacity onPress = {this.remove}>
				<Feather name="trash-2" color = "#910226" size = {27}/>
			</TouchableOpacity>
       			)}
       			
			<Text bold >{product.qty}</Text>
			<TouchableOpacity onPress = {this.handleIncreament}>
				<Feather name="plus" color = "#910226" size = {27}/>
			</TouchableOpacity>
		</Box>
	</Box>
       		)}
      
</Box>
    );
  }
}

const styles = StyleSheet.create({
image : {
	width:100,
	height:100
},
plus : {
 top:5, 
 right:5,
 position : "absolute"
},
hover:{
	position : "absolute",
	top:10,
	right:10,
	zIndex:99,
	left : 10
}

})
 export default ProductCard;