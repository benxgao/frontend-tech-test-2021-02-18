import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostItem from './PostItem';
import { loadPostPage } from '../../actions';
import { connect } from 'react-redux';

class PostList extends Component {
  componentDidMount() {
    this.props.loadPostPage();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h3>Posts</h3>
        {posts && posts.length > 0 && posts.map(post => {
          return (
            <PostItem key={uuidv4()} {...{post}} />
          );
        })}
        {(!posts || posts.length < 1) && 'There is no post created yet'}
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
