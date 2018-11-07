import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.js';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Forms from './screen/forms.js';
import Posts from './screen/posts.js'
import Post from './screen/post.js'
import Other from './screen/other.js';

export default createBottomTabNavigator({
  Home: createStackNavigator({
    Forms: Forms,
    Posts: Posts,
    Post: Post,
  }),
  Other: Other,
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case "Forms": {
          iconName = "ios-cloud-outline";
          break;
        }
        case "Other": {
          iconName = "ios-cafe";
          break;
        }
        default: {
          iconName = "ios-car"
        }
      }
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
