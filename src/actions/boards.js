const baseUrl = 'http://localhost:3005/api/v1'

export const fetchBoards = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/boards`, data)
      .then(response => response.json())
      .then(boards => dispatch({
          type: 'FETCH_BOARDS',
          payload: boards
      }))
      .catch(err => err)
  }
}

export const createBoard = board => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ board })
  }
  
  return dispatch => {
    fetch(`${ baseUrl }/boards`, data)
      .then(response => response.json())
      .then(board => dispatch({
        type: 'CREATE_BOARD',
        payload: board
      }))
      .catch(err => err)
  }
}

export const setBoard = board => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/boards/${ board }`, data)
      .then(response => response.json())
      .then(board => dispatch({
          type: 'SET_BOARD',
          payload: board
      }))
      .catch(err => err)
  }
}
