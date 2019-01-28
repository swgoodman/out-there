import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  {
  current: {},
  all: []
}

export default function manageIdeas(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_IDEAS':
    debugger
      return { ...state, all: action.payload }
    case 'CREATE_IDEA':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_IDEA':
      return { ...state, all: state.all.filter(idea => idea.id !== action.payload.id) }
    case 'CREATE_COMMENT' :
      let all = [ ...state.all ]
      let idx = all.findIndex(idea => idea.id === action.payload.idea_id)
      all[idx].comments.push(action.payload)
      return { ...state, all }
    case 'DELETE_COMMENT':
      all = [ ...state.all ]
      idx = all.findIndex(idea => idea.id === action.payload.idea_id)
      all[idx].comments = all[idx].comments.filter(comment => comment.id !== action.payload.id)

      return { ...state, all }
    default: return state
  }
}
