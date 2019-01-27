const baseUrl = 'http://localhost:3005/api/v1'

export const fetchComments = idea => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas/${ idea.id }/comments`, data)
      .then(response => response.json())
      .then(comments => dispatch({
        type: 'FETCH_COMMENTS',
        payload: comments
      }))
      .catch(err => err)
  }
}

export const createComment = (comment, ideaId) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ comment: comment })
  }
  
  return dispatch => {
    fetch(`${ baseUrl }/ideas/${ ideaId }/comments`, data)
      .then(response => response.json())
      .then(comment => dispatch({
        type: 'CREATE_COMMENT',
        payload: comment
      }))
      .catch(err => err)
  }
}

export const deleteComment = (id, ideaId) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas/${ ideaId }/comments/${ id }`, data)
      .then(response => response.json())
      .then(comment => dispatch({
        type: 'DELETE_COMMENT',
        payload: comment
      }))
      .catch(err => err)
  }
}
