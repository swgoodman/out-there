import React, { Component } from 'react';
import BoardContainer from './containers/boardContainer.js';
import Inspiration from './containers/inspirationContainer.js';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      fetchingData: false
    }
  }

  render() {

    const {fetchingData} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Out There</h1>
            {
              fetchingData ?
                <img src={logo} className="App-logo" alt="logo" />
              :
                <p>Content is up to date.</p>
            }
        </header>

        <BoardContainer ideas={this.state.ideas}/>
        <Inspiration />

      </div>
    );
  }
}

export default App;
