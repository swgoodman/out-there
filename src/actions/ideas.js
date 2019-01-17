const baseUrl = 'http://localhost:3000/api/v1'

export const fetchIdeas = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas`, data)
      .then(response => response.json())
      .then(ideas => dispatch({
          type: 'FETCH_IDEAS',
          payload: ideas
      }))
      .catch(err => err)
  }
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
      .then(idea => dispatch({
        type: 'CREATE_IDEA',
        payload: idea
      }))
      .catch(err => err)
  }
}

export const deleteIdea = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas/${ id }`, data)
      .then(response => response.json())
      .then(idea => dispatch({
        type: 'DELETE_IDEA',
        payload: idea
      }))
      .catch(err => err)
  }
}
