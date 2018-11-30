import cuid from 'cuid';
export const cuidFn = cuid;

const initState = {
  dogsImageArray: [],
  requesting: false
}

export default function manageIdeas(state = {
  users: [],
  ideas: [],
  comments: [],
}, action) {
  switch (action.type) {

    case 'ADD_IDEA':

      const idea = { header: action.header, body: action.body, id: cuidFn() };
      return {
        ...state,
        ideas: [ ...state.ideas, idea]
      }

    case 'DELETE_IDEA':
      const ideas = state.ideas.filter(idea => idea.id !== action.id);
      return { ...state, ideas}

    case 'ADD_COMMENT':

      const comment = { text: action.comment.body, ideaId: action.idea.ideaId, id: cuidFn() };
      return { ...state,
        comments: [...state.comments, comment]
      }

    case 'DELETE_COMMENT':
      const comments = state.comments.filter(comment => comment.id !== action.id);
      return {...state, comments }

    default:
      return state;

  }
};
