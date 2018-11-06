import React from 'react';
import {Text, View} from 'react-native';
import AppTouchableOpacity from './../topic03/appTouchableOpacity';
import Post from './post.js'
import PostList from './postList.js';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
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
          posts: posts
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

  render = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PostList posts={ this.state.posts }/>
        <AppTouchableOpacity
          text="Next"
          type="primary"
          onPress={() => this.props.navigation.navigate('Forms3')}
        />
      </View>

    );
  }
}
