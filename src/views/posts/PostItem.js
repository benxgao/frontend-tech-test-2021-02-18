import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostItem extends Component {
  render() {
    const { post } = this.props;
    console.log('post', post);

    return (
      <div>
        {post.id}
      </div>
    );
  }
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
