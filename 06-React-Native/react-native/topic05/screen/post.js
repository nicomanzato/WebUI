import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../../topic03/appTouchableOpacity';
import styles from './../styles.js';
import PostComponent from './../components/postComponent.js'


export default class Post extends React.Component {
  constructor(props) {
    super(props);

    let post = props.navigation.getParam('post', 'NO-POST');

    this.state = {
      post: post
    }
  }

  render() {
    return (
      <View style={styles.centeredContainer}>
        <PostComponent
          title={this.state.post.title}
          body={this.state.post.body}
        />
      </View>
    );
  }
}
