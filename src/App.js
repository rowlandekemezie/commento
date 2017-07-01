import React, { Component } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { postComment, fetchComments, updateComments, deleteComments } from './helpers/requests';

import './App.css';

class App extends Component {

   state = {
    comment: { 
      author: '',
       message: '',
    },
    comments: []
  }

  fetchCommentsFromAPI() {
    fetchComments()
    .then(res =>  this.setState({comments: res.comments}));
  }

  componentDidMount() {
    this.fetchCommentsFromAPI();
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
  
  render() {
    const { comment, comments } = this.state;
    return (
      <div className="App">
        <CommentList 
          comments={comments}
          handleSubmit={this.handleOnSubmit}
          comment={comment}
          handleChange={this.handleOnChange}
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
