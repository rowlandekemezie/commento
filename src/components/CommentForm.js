import React from 'react';

const CommentForm = ({ value, handleSubmit, handleChange }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input 
        name="author"
        value={value.author}
        onChange={handleChange}
        type="text"
      />
      <input 
        name="message"
        onChange={handleChange}
        value={value.message}
        type="text"
      />
      <input 
        value="post"
        type="submit"
      />
    </form>
  </div>
)

export default CommentForm;