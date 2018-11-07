import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import PostComponent from './postComponent.js'

const PostListElement = (props) => {

  onPress = () => {
    props.onPress(props.post);
  };

  return (
    <TouchableOpacity onPress={this.onPress} style={styles.post}>
      <PostComponent title={props.post.title} body={props.post.body} />
    </TouchableOpacity>
  );
}

export default PostListElement
