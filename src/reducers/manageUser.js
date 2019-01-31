const initialState = {
  current: {}
}

export default function manageUser(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
    debugger
      return { ...state, current: action.payload }
    default: return state
  }
}
