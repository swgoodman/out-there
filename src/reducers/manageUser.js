const initialState = {
  current: {}
}

export default function manageUser(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, current: action.payload }
    default: return state
  }
}
