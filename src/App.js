import React, { Component } from 'react';
import BoardContainer from './containers/boardContainer.js';
import Inspiration from './containers/inspirationContainer.js';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      fetchingData: false,
      ideas: {
        0: {
          id: 12335,
          header: "50 Cent should start a cologne brand called 50 Scent",
          body: "A budget cologne from 50 Cent. On sale now for 50 cents."
        }
        1: {
          id: 12336,
          header: "An R2D2 Spinoff",
          body: "His outer dialogue is bleeps, but his inner voice is David Attenborough"
        }
      }
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
