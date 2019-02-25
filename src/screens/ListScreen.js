import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar} from 'react-native';
import {inject,observer} from 'mobx-react/native';
import CartCard from '../components/CartCard'


@inject('ordersStore')
@observer
 class ListScreen extends Component {
 	static navigationOptions = ({navigation}) => ({
	title: "Orders",
})

  state = {};
  render() {
  	const {ordersStore} = this.props;
    return (
      <Box f={1} center bg="white">
      <StatusBar barStyle= "light-content"/>
        <Text></Text>
      </Box>
    );
  }
}
 export default ListScreen;