import React, { Component } from 'react'

class newYorkTimes extends Component {

  constructor() {
    super();

    this.state = {

    };
  }

  const

  componentWillMount() {
    fetchArticles = () => {
      let endpoint = 'https://api.nytimes.com/svc/topstories/v2/technology.json';

    fetch(endpoint, {
      method: 'get',
      headers: new Headers({
        'api-key': NEW_YORK_TIMES_API_KEY
      })
    }).then(function(response) {
      return response.json();
    }).then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  };

  render() {
    return (
      <p>hello</p>
    );
  }
}

export default newYorkTimes;
