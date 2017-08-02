import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  
  render() {
    const { comments, handleCommentUpdate, handleDeleteComment } = this.props;
    return (
      <div className="container">
        { comments && comments.map((comment, index) =>
              <Comment
                uniqueID={comment['_id']}
                author={comment.author}
                onUpdate={handleCommentUpdate}
                onDelete={handleDeleteComment}
                key={index}
              >
              {comment.message}
            </Comment> )}
      </div>
    )
  }
}

export default CommentList;