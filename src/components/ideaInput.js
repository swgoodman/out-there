import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IdeaInput extends Component {


    constructor() {
      super();

      this.state = {
        header: '',
        body: ''
      };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.addComment(this.state)
      this.setState({
        header: '',
        body: ''
      });
    }

    handleOnClick() {
      this.props.deleteIdea(this.props.idea.id);
    }

      render() {
        const { title, description } = this.state

        return (
         <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="header"
                placeholder="What's the big idea?"
                value= { header }
                onChange={this.handleChange} />
              <textarea
                type="text"
                name="body"
                placeholder="Details"
                value={ body }
                onChange={this.handleChange}
                 />
              <input type="submit" />
            </form>

            <button onClick={() => this.handleOnClick()}> X </button>
          </div>
        );
      }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  createIdea
}, dispatch)

export default connect(null, mapDispatchToProps)(TodoForm)
