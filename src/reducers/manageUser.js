const initialState = {
  current: {}
}

export default function manageUser(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, current: action.payload }
    case 'AUTHENTICATION_FAILURE':
      return {
        errors: action.errors || []
      }
    default: return state
  }
}
