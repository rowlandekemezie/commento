import React from 'react';

const CommentRow = ({comments, onUpdate, onDelete }) => (
  <div> { comments.map((comment, index) => (
              <div key={index}>
                <h1>{comment.author}</h1>
                <p>{comment.comment}</p>
                <button onClick={onDelete}>delete</button>
                <button onClick={onUpdate}>update</button>
              </div>))
      })
 </div>)

export default CommentRow;