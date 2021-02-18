import React from "react";
import styled from "styled-components";

import {
  addPersonIdToFrequencyList,
  removePersonIdFromFrequencyList,
  addPersonIdToSuggestionList,
  removePersonIdFromSuggestionList
} from "../actions/AsyncActions";

import { FrequencyTable } from "./FrequencyTable";
import { SuggestionTable } from "./SuggestionTable";

const IndividualPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2rem;
`;

const PersonField = styled.div`
  display: flex;
  justify-content: left;
  flex-basis: 20rem;
`;

const ShowButton = styled.div`
  display: flex;
  justify-content: right;
  background-color: blue;
`;

const HideButton = styled.div`
  display: flex;
  justify-content: right;
  background-color: red;
`;

const DefaultInformationRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const showFrequencyForPersonId = personId => {
  store.dispatch(addPersonIdToFrequencyList(personId));
};

const hideFrequencyForPersonId = personId => {
  store.dispatch(removePersonIdFromFrequencyList(personId));
};

const showSuggestionForPersonId = personId => {
  store.dispatch(addPersonIdToSuggestionList(personId));
};

const hideSuggestionForPersonId = personId => {
  store.dispatch(removePersonIdFromSuggestionList(personId));
};

export const PersonIndividual = (
  person,
  isFrequencyActive,
  isSuggestionActive,
  similarPeople
) => {
  return (
    <IndividualPerson key={person.id}>
      <DefaultInformationRow>
        <PersonField>{person.display_name}</PersonField>
        <PersonField>{person.full_email_address}</PersonField>
        <PersonField>{person.title}</PersonField>
        {!isFrequencyActive && (
          <ShowButton>
            <button
              type="button"
              onClick={() => showFrequencyForPersonId(person.id)}
            >
              Show Frequency
            </button>
          </ShowButton>
        )}
        {isFrequencyActive && (
          <HideButton>
            <button
              type="button"
              onClick={() => hideFrequencyForPersonId(person.id)}
            >
              Hide Frequency
            </button>
          </HideButton>
        )}
        {!isSuggestionActive && (
          <ShowButton>
            <button
              type="button"
              onClick={() => showSuggestionForPersonId(person.id)}
            >
              Show Suggestion
            </button>
          </ShowButton>
        )}
        {isSuggestionActive && (
          <HideButton>
            <button
              type="button"
              onClick={() => hideSuggestionForPersonId(person.id)}
            >
              Hide Suggestion
            </button>
          </HideButton>
        )}
      </DefaultInformationRow>
      {isFrequencyActive && FrequencyTable(person)}
      {isSuggestionActive && SuggestionTable(person, similarPeople)}
    </IndividualPerson>
  );
};
