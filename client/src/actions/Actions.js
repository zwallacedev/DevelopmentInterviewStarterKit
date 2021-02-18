import * as actions from "./Constants";

export function receiveMe(me) {
  return {
    type: actions.RECEIVE_ME,
    me
  };
}

export function receivePeopleList(people) {
  return {
    type: actions.PEOPLE_LIST,
    people
  };
}

export function addPersonIdToFrequency(personId) {
  return {
    type: actions.SHOW_FREQUENCY_FOR_ID,
    personId
  };
}

export function removePersonIdFromFrequency(personId) {
  return {
    type: actions.HIDE_FREQUENCY_FOR_ID,
    personId
  };
}

export function addPersonIdToSuggestion(personId) {
  return {
    type: actions.SHOW_SUGGESTION_FOR_ID,
    personId
  };
}

export function removePersonIdFromSuggestion(personId) {
  return {
    type: actions.HIDE_SUGGESTION_FOR_ID,
    personId
  };
}
