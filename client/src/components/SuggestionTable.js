import React from "react";
import styled from "styled-components";

const SuggestionTableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SuggestionTableDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

const SuggestionTableRow = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const SuggestionTableCell = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
`;

const showTableRow = (person, similarPerson) => {
  console.log("similarPerson", similarPerson);
  return (
    <SuggestionTableRow key={person.id + similarPerson}>
      <SuggestionTableCell>{similarPerson.display_name}</SuggestionTableCell>
      <SuggestionTableCell>{similarPerson.email_address}</SuggestionTableCell>
    </SuggestionTableRow>
  );
};

export const SuggestionTable = (person, similarPeople) => {
  return (
    <SuggestionTableWrapper key={`suggestiontable__${person.id}`}>
      <SuggestionTableDisplay>
        <SuggestionTableRow>
          <SuggestionTableCell>Name</SuggestionTableCell>
          <SuggestionTableCell>Email</SuggestionTableCell>
        </SuggestionTableRow>
        {similarPeople.map(similarPerson =>
          showTableRow(person, similarPerson)
        )}
      </SuggestionTableDisplay>
    </SuggestionTableWrapper>
  );
};
