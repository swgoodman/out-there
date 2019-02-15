const baseUrl = 'http://localhost:3005/api/v1'

export const fetchIdeas = (id) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/boards/${ id }`, data)
      .then(response => response.json())
      .then(ideas => dispatch({
          type: 'FETCH_IDEAS',
          payload: ideas
      }))
      .catch(err => err)
  }
}

export const createIdea = (idea, board) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ idea: idea, board: board })
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

export const sortIdeas = ideas => {
  ideas.sort((a, b) => (a.header > b.header) ? 1 : ((b.header > a.header) ? -1 : 0));

  return (dispatch) => {
    dispatch({
      type: 'SORT_IDEAS',
      payload: ideas
    });
  };
}
