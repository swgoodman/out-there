import React, { Component } from 'react'

class Idea extends Component {

  render() {
    const { idea } = this.props;


    return (
        <div>
          <h1>{ idea }</h1>
        </div>
      );

    }
  };

export default Idea;
