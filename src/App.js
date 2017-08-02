import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { postComment, fetchComments, updateComments, deleteComment } from './helpers/requests';

import './App.css';

class App extends Component {

   state = {
    comment: { 
      author: '',
       message: '',
    },
    comments: []
  }

  fetchCommentsFromAPI = () => {
    fetchComments()
    .then(res =>  this.setState({comments: res.comments}));
  }

  componentDidMount() {
    this.fetchCommentsFromAPI();
    setInterval(this.fetchCommentsFromAPI, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.fetchCommentsFromAPI, 1000)
  }

  handleOnSubmit = (ev) => {
    const { author, message } = this.state.comment; 
    const oldComments = this.state.comments;
    ev.preventDefault();
    this.setState({comments: this.state.comments.concat(this.state.comment)})
    if(!author || !message) return;
    postComment({author, message})
    .catch(err => this.setState({comments: oldComments}));

    this.setState({comment: {author: '', message: ''}})
  }

  handleOnChange = ({ target: { value, name} }) => {
    this.setState({comment: {...this.state.comment, [name]: value }})
  }

  handleCommentUpdate = (id, comment) => {
    updateComments(id, comment)
      .catch(err => console.log(err, 'error updating'))
  }

  handleDeleteComment = (id) => {
    deleteComment(id)
      .then(() => console.log('Successfully deleted'))
  }
  
  render() {
    const { comment, comments } = this.state;
    return (
      <div className="App">
        <CommentList 
          comments={comments}
          handleSubmit={this.handleOnSubmit}
          handleCommentUpdate={this.handleCommentUpdate}
          handleDeleteComment={this.handleDeleteComment}
        />
        <CommentForm 
          value={comment}
          handleChange={this.handleOnChange}
          handleSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default App;
