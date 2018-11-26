import React, { Component } from 'react'

class newYorkTimes extends Component {

  constructor() {
    super();

    this.state = {

    };
  }

  fetchArticles = () => {
    let endpoint = 'https://api.nytimes.com/svc/topstories/v2/technology.json';

    fetch(endpoint, {
      method: 'get',
      headers: new Headers({
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*',
        'access-control-allow-credentials': "true"

      })
    })
    .then(function(response){
      return response.json();
    });
  }

  componentDidMount() {

    this.fetchArticles();
  }

  render() {
    return (
        <div>

        </div>
      );
    }
}

export default newYorkTimes;
