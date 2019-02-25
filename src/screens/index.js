import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React, { Component } from 'react';
import TabBar from '../components/TabBar';
import NavigationServie from '../NavigationService';
import { Ionicons } from '@expo/vector-icons';

const primary = {
  headerStyle :{
      backgroundColor : '#910226',
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: '400',
    },

}
const HomeStack = createStackNavigator(
{
  Home:{
    getScreen: () => require('./HomeScreen').default
  },
    Items:{
    getScreen: () => require('./ItemsScreen').default
  },
  Modal:{
    getScreen: () => require('./ProductModal').default
  }

},
{
  navigationOptions : {...primary

    }
}
)

const cartStack = createStackNavigator(
{
  Cart:{
    getScreen: () => require('./CartScreen').default
  },
  Confirmation:{
    getScreen: () => require('./Confirmation').default
  }
    
},
{
  navigationOptions : {...primary}
}
)



const AboutStack = createStackNavigator(
{
  About:{
    getScreen: () => require('./AboutScreen').default
  },
    
},
{
  navigationOptions : {...primary}
}
)


 const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Cart: cartStack,
  About:AboutStack,
},
{

});

 const MainNavigator = createStackNavigator({
  Tab: TabNavigator,
},{

  navigationOptions:{
    header:null,
  },
},

);

 const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

 class Navigation extends Component {
  state = {};
  render() {
    return ( <AppNavigator ref ={ re => NavigationService.setTopLevelNavigator(re)}/>);
  }
}
 export default Navigation;