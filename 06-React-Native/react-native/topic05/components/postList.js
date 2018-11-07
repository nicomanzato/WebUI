import React from 'react';
import {Text, FlatList, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './../styles.js';
import PostListElement from './postListElement.js'

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
        />
      </View>
    );
  }

}

export default PostList
