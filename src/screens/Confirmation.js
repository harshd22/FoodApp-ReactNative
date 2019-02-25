import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar,Image} from 'react-native';
 import { images } from '../constants/images';


 class Confirmation extends Component {
 	 	static navigationOptions = ({navigation}) => ({
	title: "Confirmation",
})

       componentDidMount() {
    this.return();
  }
   return = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  };

  render() {
    return (
      <Box f={1} center bg="white">
        <Box mb="sm">
          <Image source={images.logo} />
        </Box>
        <Text size="sm">Thanks For Ordering</Text>
      </Box>
    );
  }
}
 export default Confirmation;