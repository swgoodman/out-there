import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  {
  current: {},
  all: [
    {
      id: '1',
      header: "Russian Manchurian Candidate",
      body: "this is a great idea."
    },
    {
      id: '2',
      header: "Beaux for President",
      body: "2020"
    },
    {
      id: '3',
      header: "Young Thug is a god?",
      body: "Read a book."
    },
    {
      id: '4',
      header: "Lightning Chicken Nuggets",
      body: "Sounds like flying cars"
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
