import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  {
  current: {},
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

    default:
      return state;
  }
};
