const baseUrl = 'http://localhost:3000/api/v1'

export const fetchIdeas = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas`, data)
      .then(response => response.json())
      .then(todos => dispatch({
          type: 'FETCH_IDEAS',
          payload: ideas
      }))
      .catch(err => err)
  }
}

export function fetchIdeasSuccess(IDEAS) {
  return {
    type: FETCH_IDEAS_SUCCESS,
    payload: 'idea'
  };
}

export function fetchIdeasFailure(error) {
  return {
    type: FETCH_IDEAS_FAILURE,
    payload: error
  };
}

export const createIdea = idea => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ idea })
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas`, data)
      .then(response => response.json())
      .then(todo => dispatch({
        type: 'CREATE_IDEA',
        payload: idea
      }))
      .catch(err => err)
  }
}
