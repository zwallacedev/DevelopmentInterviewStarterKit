import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchMe() {
  return dispatch => {
    return fetch('/api/me.json', creds).
      then(response => {
        const res = response.json()
        console.log("res", res);
        return res;
      }).
      then(me => dispatch(actions.receiveMe(me)));
  }
}