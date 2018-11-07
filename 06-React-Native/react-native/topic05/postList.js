import React from 'react';
import {Text, FlatList, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles.js';

const PostListElement = (props) => {

  onPress = () => {
    props.onPress(props.post);
  };

  return (
    <TouchableOpacity onPress={this.onPress} style={styles.post}>
      <Text style={styles.postTitle}> { props.post.title } </Text>
      <Text style={styles.postBody}> { props.post.body } </Text>
    </TouchableOpacity>
  );
}

const Loading = (props) => {

  return (
    <View>
      { props.refreshing &&
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" />
        </View>
      }
    </View>
  );
}

class PostList extends React.Component{

  keyExtractor = (item, index) => '' + item.id;

  onPress = post => {
    this.props.navigation.navigate('Post', { post: post })
  }

  renderItem = (element) => {
    return (
      <PostListElement
        onPress={this.onPress}
        id={element.item.id}
        post={element.item} />
    )
  };

  render = () => {
    return(
      <View>
        <Loading refreshing={this.props.refreshing}/>
        <FlatList
          refreshing={this.props.refreshing}
          style={styles.postList}
          data={this.props.posts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={5}
        />
      </View>
    );
  }

}

export default PostList
