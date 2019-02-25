import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';
 import { images } from '../constants/images';
 class SplashScreen extends Component {
  state = {};
  
   componentDidMount() {
    this.checkAuth();
  }
   checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 2000);
  };
   render() {
    return (
      <Box f={1} center>
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Text size="sm">Easy food ordering.</Text>
      </Box>
    );
  }
}
 export default SplashScreen;