const baseUrl = 'http://localhost:3005/api/v1'

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
      .then(user => {
        sessionStorage.setItem('user_id', user.id)
        dispatch({
          type: 'SET_USER',
          payload: user
        })

        callback()
      })
      .catch(err => err)
  }
  console.log(sessionStorage)
}

export const signupUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }
  console.log(data)

  return dispatch => {
    fetch(`${ baseUrl }/signup`, data)
      .then(response => response.json())
      .then(user => {
        sessionStorage.setItem('user_id', user.id)
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => err)
  }
}

export const fetchUser = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
// send session user id, and ask for user
  }

  return dispatch => {
    fetch(`${ baseUrl }/user`, data)
      .then(response => response.json())
      .then(user => {
        debugger
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(err => err)
  }
}

export const deleteUser = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/users/${ id }`, data)
      .then(response => response.json())
      .then(user => dispatch({
        type: 'DELETE_TODO',
        payload: user
      }))
      .catch(err => err)
  }
}
