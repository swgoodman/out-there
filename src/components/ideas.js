import React, { Component } from 'react';
import Idea from './idea';

class Ideas extends Component {
  render() {
    const { ideas, deleteIdea } = this.props;

    return(
      <ul>
        {ideas.map(idea => <Idea key={ idea.id } idea={ idea }/>)}
      </ul>
    );
  }
};

export default Ideas;
