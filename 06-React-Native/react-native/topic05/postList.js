import React from 'react';
import {Text, FlatList, View} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
  return (
    <View style={styles.post}>
      <Text style={styles.postTitle}> { props.post.title } </Text>
      <Text style={styles.postBody}> { props.post.body } </Text>
    </View>
  );
}

class PostList extends React.Component{

  keyExtractor = (item, index) => '' + item.id;

  renderItem = (element) => {
    console.log(element.item);
    return (
      <Post
        post={element.item} />
    )
  };

  render = () => {
    return(
      <FlatList
        data={this.props.posts}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }

}

export default PostList
