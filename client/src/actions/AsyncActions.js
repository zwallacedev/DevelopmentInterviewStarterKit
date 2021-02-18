import * as actions from "./Actions";

export const creds = { credentials: "same-origin" };

export function fetchMe() {
  return dispatch => {
    return fetch("/api/me.json", creds)
      .then(response => {
        const res = response.json();
        return res;
      })
      .then(me => dispatch(actions.receiveMe(me.data)));
  };
}

export function fetchPeopleList() {
  return dispatch => {
    return fetch("/api/people.json", creds)
      .then(response => {
        const res = response.json();
        return res;
      })
      .then(people => dispatch(actions.receivePeopleList(people)));
  };
}

export function addPersonIdToFrequencyList(personId) {
  return dispatch => {
    return dispatch(actions.addPersonIdToFrequency(personId));
  };
}

export function removePersonIdFromFrequencyList(personId) {
  return dispatch => {
    return dispatch(actions.removePersonIdFromFrequency(personId));
  };
}

export function addPersonIdToSuggestionList(personId) {
  return dispatch => {
    return dispatch(actions.addPersonIdToSuggestion(personId));
  };
}

export function removePersonIdFromSuggestionList(personId) {
  return dispatch => {
    return dispatch(actions.removePersonIdFromSuggestion(personId));
  };
}
