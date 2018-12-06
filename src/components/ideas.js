import React, { Component } from 'react';
import Idea from './idea';

class Ideas extends Component {

  render() {
    const { ideas, deleteIdea } = this.props;
    const ideaList = ideas.map(idea => {
      return (
        <Idea
          key={idea.id}
          idea={idea}
        />
      )
    });

    return(
      <ul>
        {ideaList}
      </ul>
    );

  }
};

export default Ideas;
