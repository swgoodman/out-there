const baseUrl = 'http://localhost:3000/api/v1'

export const loginUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`${ baseUrl }/login`, data)
      .then(response => response.json())

        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => err)
  }
}
