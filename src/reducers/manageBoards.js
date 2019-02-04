const initialState =  {
  current: {},
  all: []
}

export default function manageBoards (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BOARDS':
      return { ...state, all: action.payload }
    case 'CREATE_BOARD':
    debugger
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_BOARD':
      return { ...state, all: state.all.filter(idea => idea.id !== action.payload.id) }
    default: return state
  }
}
