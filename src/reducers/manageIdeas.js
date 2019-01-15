import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  {
  current: {},
  all: [
    {
      id: '1',
      header: "Russian Manchurian Candidate",
      body: "this is a great idea.",
      comments: [
        { id: 1, body: "This is a great idea!"},
        { id: 2, body: "I agree!"}
      ]
    },
    {
      id: '2',
      header: "Beaux for President",
      body: "2020",
      comments: [
        { id: 1, body: "This is a great idea!"},
        { id: 2, body: "I agree!"}
      ]
    },
    {
      id: '3',
      header: "Young Thug is a god?",
      body: "Read a book.",
      comments: [
        { id: 1, body: "This is a great idea!"},
        { id: 2, body: "I agree!"}
      ]
    },
    {
      id: '4',
      header: "Lightning Chicken Nuggets",
      body: "Sounds like flying cars",
      comments: [
        { id: 1, body: "This is a great idea!"},
        { id: 2, body: "I agree!"}
      ]
    }
  ]
}

export default function todosReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_IDEAS':
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
