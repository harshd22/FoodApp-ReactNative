import React, {PureComponent} from 'react';
import {Image,ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import {Box,Text} from 'react-native-design-utility';
import {NavigationService} from '../NavigationService';

class Card extends PureComponent{
	state = {}

  press = () => {
  	NavigationService.navigate('Items', {name:this.props.title})
  }

	render(){
		const{title, image} = this.props;
		return(

			
<TouchableOpacity onPress = {this.press} style = {styles.button}>
	<Box bg = "white" f={1} center style = {{borderWidth:1, borderColor:"grey"}} > 
			{image && (
				
		<Box>
			<Image source ={image}/>
		</Box>
				)}				
		<Box center >
			<Text bold center capitalizeEach color = "#707070">{title}</Text>
		</Box>
	</Box>
</TouchableOpacity>
		)
	}

}

const styles = StyleSheet.create({
	button :{
		flex:1,
	}
})

export default Card;