import React, { Component } from 'react';
import CommentRow from './CommentRow';

class CommentList extends Component {
  
  state = {
    shouldUpdate: false
  }

  handleOnDelete = ({id}) => {

  }

  handleOnUpdate = ({id, ...rest}) => {
    this.setState({shouldUpdate: !this.state.shouldUpdate})
  }

  render() {
    const {comments, handleSubmit, comment, handleChange } = this.props;
    console.log(comment, 'who')
    return (
      <div>
        {comments && comments.length ? <CommentRow 
          comments={comments}
          onDelete={this.handleOnDelete}
          onUpdate={this.handleOnUpdate}
          /> : null }

          {this.state.shouldUpdate ? 
            <form onSubmit={handleSubmit}>
              <input 
                name="author"
                value={comment.author}
                onChange={handleChange}
                type="text"
              />
              <input 
                name="message"
                onChange={handleChange}
                value={comment.message}
                type="text"
              />
              <input 
                value="post"
                type="submit"
              />
            </form> : null
          }}
      </div>
    )
  }
}

export default CommentList;