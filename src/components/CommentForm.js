import React from 'react';

const CommentForm = ({ value, handleSubmit, handleChange }) => (
  <div>
    <form className="form-inline" onSubmit={handleSubmit}>
      <input 
        className="form-control"
        name="author"
        value={value.author}
        onChange={handleChange}
        type="text"
      />
      <input 
        name="message"
        className="form-control"
        onChange={handleChange}
        value={value.message}
        type="text"
      />
      <input 
        value="post"
        className="btn btn-primary"
        type="submit"
      />
    </form>
  </div>
)

export default CommentForm;