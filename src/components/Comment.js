import React from 'react';
import marked from 'marked';
import { updateComments } from '../helpers/requests';

class Comment extends React.Component {
  
  state = { 
    shouldUpdate: false,
    comment: {
      author: '',
      message: ''
    }
  }

  onUpdateClick = () => {
    this.setState({shouldUpdate: !this.state.shouldUpdate})
  }

  handleUpdateSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.props.uniqueID, this.state.comment)
      this.setState({shouldUpdate: false, comment: {author: '', message: ''}})
  }

  handleOnChange = ({ target: { name, value }}) => {
    this.setState({comment: {...this.state.comment, [name]: value }})
  }

  onDeleteClick  = () => {
    console.log(this.props.uniqueID)
    this.props.onDelete(this.props.uniqueID)
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    const { comment } = this.state;
    return (
      <div className="well"> 
        <span>{this.props.author}</span>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        <a className="btn btn-warning btn-xs" href="#" onClick={this.onUpdateClick}>Update</a>
        <a className="btn btn-danger btn-xs" href="#" onClick={this.onDeleteClick}>Delete</a>
        {this.state.shouldUpdate ? 
            <form className="form-inline" onSubmit={this.handleUpdateSubmit}>
              <input 
                name="author"
                value={comment.author}
                onChange={this.handleOnChange}
                type="text"
                className="form-control"
              />
              <input 
                name="message"
                onChange={this.handleOnChange}
                value={comment.message}
                type="text"
                className="form-control"
              />
              <input 
                value="Save"
                className="btn btn-primary"
                type="submit"
              />
            </form> : null
          }
      </div>
    )
  }

}


export default Comment;

