import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../topic03/appTouchableOpacity';
import Post from './model/post.js'
import PostList from './postList.js';
import styles from './styles.js';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshing: true,
    }
  }

  componentDidMount = () => {
    this.fetchPosts();
  }

  fetchPosts = () => {

    this.fetchFromApi(
      'https://jsonplaceholder.typicode.com/posts',
      (resp) => {
        let posts = resp.map( post => {
          return new Post(post.id, post.title, post.userId, post.body);
        });

        this.setState({
          posts: posts,
          refreshing: false
        });
      }
    );
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

  /*
  <AppTouchableOpacity
    text="Next"
    type="primary"
    onPress={() => this.props.navigation.navigate('Post')}
  />

  */

  render = () => {
    return (
      <View style={styles.container}>
        <PostList refreshing={this.state.refreshing} navigation={this.props.navigation} posts={this.state.posts}/>
      </View>

    );
  }
}
