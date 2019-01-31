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
    body: JSON.stringify({ name: board })
  }
  
  return dispatch => {
    fetch(`${ baseUrl }/boards`, data)
      .then(response => response.json())
      .then(idea => dispatch({
        type: 'CREATE_BOARD',
        payload: board
      }))
      .catch(err => err)
  }
}
