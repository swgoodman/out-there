import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  {
  all: [
    {
      id: '1',
      header: "What's Up!",
      body: "this is a great idea."
    },
    {
      id: '2',
      header: "What's Up!",
      body: "this is also a great idea."
    }
  ]
}

export default function manageIdeas(state = initialState, action) {
  switch (action.type) {
    case 'ADD_IDEA':
      const idea = { header: action.header, body: action.body, id: cuidFn() };

      return {
        ...state,
        all: [ ...state.all, idea ]
      }
    // case 'DELETE_IDEA':
    //   const all = state.all.filter(idea => idea.id !== action.id);
    //   return { ...state, all}
    //
    // case 'ADD_COMMENT':
    //
    //   const comment = { text: action.comment.body, ideaId: action.idea.ideaId, id: cuidFn() };
    //   return { ...state,
    //     comments: [...state.comments, comment]
    //   }
    //
    // case 'DELETE_COMMENT':
    //   const comments = state.comments.filter(comment => comment.id !== action.id);
    //   return {...state, comments }
    default:
      return state;
  }
};
