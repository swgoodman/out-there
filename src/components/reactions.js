import React, { Component } from 'react'

class Reactions extends Component {

  state = {
    reactionCount: 0
  }

  increaseCount = e => {
    e.preventDefault();
    this.setState({
      reactionCount: this.state.reactionCount + 1
    })
  }


  render() {
    return (
        <div>
          <p>{this.state.reactionCount} claps!</p>
          <button
            name="reactionCount"
            value={this.state.reactionCount}
            onClick={this.increaseCount}>
          CLAP!!
          </ button>
        </div>
      );
    }

}

export default Reactions;
