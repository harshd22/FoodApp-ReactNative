import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';
import {StatusBar, FlatList,Text} from 'react-native';
import Card from '../components/Card';
import HomeTop from '../components/HomeTop';
import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyA06bt6LGa9IWBSZSlZ8G5HLDevux-_7Iw",
    authDomain: "foodapp-95693.firebaseapp.com",
    databaseURL: "https://foodapp-95693.firebaseio.com",
    projectId: "foodapp-95693",
    storageBucket: "foodapp-95693.appspot.com",
    messagingSenderId: "783393482303"
  };
  firebase.initializeApp(config);


	  firebase.database().ref('categories').on('value' ,(data) =>{
    console.log(data);
  });


const categories = [
  {
    id: 1,
    title: 'Main Menu',
    image: require('../../assets/main.jpg'),
  },
];

 class HomeScreen extends Component { 

renderItem = ({ item, index }) => {

    return (
      <Box w={ 380 } bg="white" h={120}  >
        <Card {...item} />
      </Box>
    );
  };
 

 static navigationOptions = {
 	title : 'Home'
 };
 separator = () => <Box h={5} bg = "#F5F5F5"/>;
  state = {};
  render() {
    return (
      <Box f={1} center bg="white">
      <StatusBar barStyle= "light-content"/>
        <Box h={130} bg = "red" >
        	<HomeTop/>
        </Box>

        <Box f={1} w={400} p = {5}>
        	<FlatList
        		data = {categories}
        		keyExtractor={item => String(item.id)}
        		renderItem = {this.renderItem}
        		ItemSeparatorComponent={this.separator}
        	/>
        </Box>
      </Box>
    );
  }
}
 export default HomeScreen;