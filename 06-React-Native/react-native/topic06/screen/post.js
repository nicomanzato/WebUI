import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../../topic03/appTouchableOpacity';
import styles from './../styles.js';
import PostComponent from './../components/postComponent.js'
import UserComponent from './../components/userComponent.js'
import User from './../model/user.js'

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    let post = props.navigation.getParam('post', 'NO-POST');

    this.state = {
      post: post,
      user: {},
      refreshing: true,
    }
  }

  componentDidMount = () => {
    const endpoint = `https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`;
    this.fetchFromApi(endpoint, (userInfo) => {

      this.setState({
        user: new User(userInfo.id, userInfo.name, userInfo.username, userInfo.email, userInfo.phone),
        refreshing: false
      });
    })
  }

  fetchFromApi = (endpoint, callback) => {
    return fetch(endpoint)
    .then((response) => response.json())
    .then((responseJson) => {
      callback(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render = () => {
    return (
      <View style={styles.container}>
        <PostComponent
          title={this.state.post.title}
          body={this.state.post.body} />
        <UserComponent user={this.state.user} />
      </View>
    );
  }
}
