import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'


 class AboutScreen extends Component {
 	 	static navigationOptions = ({navigation}) => ({
	title: "About",
})
  state = {};
  render() {
    return (


      <Box f={1} center bg="white">
       	<Box>
    		<Text>Address : 123 Abc Street, Wellington</Text>
    		<Text>Contact : 021-19782xxx</Text>
    	</Box>
        <StatusBar barStyle= "light-content"/>

        	<MapView 
        	style = {styles.map}
        		region={{
        			latitude:-41.28664,
        			longitude:174.77557,
        			latitudeDelta:0.1,
        			longitudeDelta:0.1
        		}}>
        		<MapView.Marker coordinate={ {latitude: -41.28664,longitude: 174.77557} }/>
        	</MapView>

        
      </Box>
    );
  }
}

const styles = StyleSheet.create({

	container:{

	},
	map:{
		position: 'absolute',
		top:0,
		left:0,
		bottom:0,
		right:0
	}

});
 export default AboutScreen;