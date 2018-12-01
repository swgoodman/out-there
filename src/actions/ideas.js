//Idea list
export const FETCH_IDEAS = 'FETCH_IDEAS';
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS';
export const FETCH_IDEAS_FAILURE = 'FETCH_IDEAS_FAILURE';
export const RESET_IDEAS = 'RESET_IDEAS';


export function fetchIDEAS() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/ideas`,
    headers: []
  });

  return {
    type: FETCH_IDEAS,
    payload: request
  };
}

export function fetchIDEASSuccess(IDEAS) {
  return {
    type: FETCH_IDEAS_SUCCESS,
    payload: ideas
  };
}

export function fetchIDEASFailure(error) {
  return {
    type: FETCH_IDEAS_FAILURE,
    payload: error
  };
}
