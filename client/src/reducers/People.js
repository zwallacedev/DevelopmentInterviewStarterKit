import { merge, mergeArray } from "../utils";
import {
  PEOPLE_LIST,
  HIDE_FREQUENCY_FOR_ID,
  SHOW_FREQUENCY_FOR_ID,
  SHOW_SUGGESTION_FOR_ID,
  HIDE_SUGGESTION_FOR_ID
} from "../actions/Constants";

export function people(state = {}, action) {
  switch (action.type) {
    case PEOPLE_LIST:
      return merge(state, { list: action.people });
    case SHOW_FREQUENCY_FOR_ID:
      const showFrequencyIds =
        state && state.showFrequencyForIds ? state.showFrequencyForIds : [];
      showFrequencyIds.push(action.personId);

      return merge(
        (state, { list: state.list, showFrequencyForIds: showFrequencyIds })
      );
    case HIDE_FREQUENCY_FOR_ID:
      let hideFrequencyIds =
        state && state.showFrequencyForIds ? state.showFrequencyForIds : [];

      hideFrequencyIds = hideFrequencyIds.filter(id => id !== action.personId);
      return merge(
        (state, { list: state.list, showFrequencyForIds: hideFrequencyIds })
      );
    case SHOW_SUGGESTION_FOR_ID:
      const showSuggestionIds =
        state && state.showSuggestionForIds ? state.showSuggestionForIds : [];
      showSuggestionIds.push(action.personId);

      return merge(
        (state, { list: state.list, showSuggestionForIds: showSuggestionIds })
      );
    case HIDE_SUGGESTION_FOR_ID:
      let hideSuggestionForIds =
        state && state.showSuggestionForIds ? state.showSuggestionForIds : [];

      hideSuggestionForIds = hideSuggestionForIds.filter(
        id => id !== action.personId
      );
      return merge(
        (state,
        { list: state.list, showSuggestionForIds: hideSuggestionForIds })
      );
    default:
      return state;
  }
}
