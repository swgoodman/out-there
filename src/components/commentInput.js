import React, { Component } from 'react'

class CommentInput extends Component {

  constructor(props) {
  super(props);

    this.state = {
      header: '',
      body: ''
    };
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state)
    this.setState({
      header: '',
      body: ''
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <input type="text" value={this.state.header} onChange={event => this.handleOnChange(event)} />
            <input type="text" value={this.state.body} onChange={event => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      );
    }

}

export default CommentInput;
