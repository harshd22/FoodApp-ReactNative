import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import {StatusBar, ScrollView,TouchableOpacity} from 'react-native';
import ProductCard from '../components/ProductCard';
import {inject} from 'mobx-react/native';
import {observer} from 'mobx-react/native';


@inject('productsStore')
@observer
 class ItemsScreen extends Component {

static navigationOptions = ({navigation}) => ({
	title: navigation.getParam('name','Item'),
})



  state = {};
  render() {
  	const {title} = this.props;
    return (
      <Box bg="black">
      
      <ScrollView vertical showHorizontalScrollIndicator = {false}>
      {this.props.productsStore.data.map(product=>(
      		<ProductCard key={product.id} product = {product}/>
      	))}
      	
      </ScrollView>
      
      </Box>
    );
  }
}
 export default ItemsScreen;