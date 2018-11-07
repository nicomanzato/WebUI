import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.js';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Forms from './screen/forms.js';
import Posts from './screen/posts.js'
import Post from './screen/post.js'
import Camera from './screen/camera.js';
import CameraShowPicture from './screen/cameraShowPicture.js';

export default createBottomTabNavigator({
  Home: createStackNavigator({
    Forms: Forms,
    Posts: Posts,
    Post: Post,
  }),
  Camera: createStackNavigator({
    Camera1: Camera,
    Camera2: CameraShowPicture
  }),
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case "Home": {
          iconName = "ios-cloud-outline";
          break;
        }
        case "Other": {
          iconName = "ios-camera";
          break;
        }
        default: {
          iconName = "ios-cafe"
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
