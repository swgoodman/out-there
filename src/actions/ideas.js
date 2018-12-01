//Idea list
export const FETCH_IDEAS = 'FETCH_IDEAS';
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS';
export const FETCH_IDEAS_FAILURE = 'FETCH_IDEAS_FAILURE';
export const RESET_IDEAS = 'RESET_IDEAS';


export function fetchIdeas() {
  // FETCH REQUEST
  const request = ({
    method: 'get',
    url: `${'localhost:3000'}/ideas`,
    headers: []
  });

  return {
    type: FETCH_IDEAS,
    payload: request
  };
}

export function fetchIdeasSuccess(IDEAS) {
  return {
    type: FETCH_IDEAS_SUCCESS,
    payload: 'idea'
  };
}

export function fetchIdeasFailure(error) {
  return {
    type: FETCH_IDEAS_FAILURE,
    payload: error
  };
}
