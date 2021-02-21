import React, { Component } from 'react';
import PostItem from './PostItem';
import { loadPostPage } from '../../actions';
import { connect } from 'react-redux';

class PostList extends Component {
  componentDidMount() {
    this.props.loadPostPage();
  }

  render() {
    const { posts } = this.props;
    console.log('Posts', Array.isArray(posts));
    return (
      <div>
        <h3>Posts</h3>
        {posts && posts.length > 0 && posts.map(post => {
          console.log('Post', post);
          return (
            <PostItem key={post.id} {...{post}} />
          );
        })}
        {(!posts || posts.length > 0) && 'There is no post created yet'}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ posts: state.posts });
}

export default connect(
  mapStateToProps,
  {
    loadPostPage
  }
)(PostList);
