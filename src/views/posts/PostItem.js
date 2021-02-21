import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

const PostCard = styled.div`
  background: #efefef;
  margin: 1rem 0;
  min-height: 5rem;
`;

const CommentBox = styled.div`
  background: #dddddd;
  margin: 0.5rem 0;
  min-height: 2rem;
`;

export default class PostItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <PostCard>
        <h1>{post.title}</h1>
        <div>{post.createdBy.name}</div>
        <div>{post.content}</div>
        {post.comments && post.comments.map(comment => (
          <CommentBox key={uuidv4()}>{comment.content}</CommentBox>
        ))}
      </PostCard>
    );
  }
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
