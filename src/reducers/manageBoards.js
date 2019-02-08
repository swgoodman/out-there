const initialState =  {
  current: {},
  all: []
}

export default function manageBoards (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BOARDS':
      return { ...state, all: action.payload }
    case 'SET_BOARD':
      return { ...state, current: action.payload.board }
    case 'CREATE_BOARD':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_BOARD':
      return { ...state, all: state.all.filter(board => board.id !== action.payload.id) }
    default: return state
  }
}
