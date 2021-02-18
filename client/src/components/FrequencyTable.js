import React from "react";
import styled from "styled-components";

const FrequencyTableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FrequencyTableDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

const FrequencyTableRow = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const FrequencyTableCell = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
`;

// charSet is guaranteed to have a length of 2
const showTableRow = (person, charSet) => {
  const char = charSet[0];
  const charCount = charSet[1];

  return (
    <FrequencyTableRow key={person.id + char}>
      <FrequencyTableCell>{char}</FrequencyTableCell>
      <FrequencyTableCell>{charCount}</FrequencyTableCell>
    </FrequencyTableRow>
  );
};

export const FrequencyTable = person => {
  return (
    <FrequencyTableWrapper key={`freqtable__${person.id}`}>
      <FrequencyTableDisplay>
        <FrequencyTableRow>
          <FrequencyTableCell>Char</FrequencyTableCell>
          <FrequencyTableCell>Count</FrequencyTableCell>
        </FrequencyTableRow>
        {person.sortedCharacters.map(charSet => showTableRow(person, charSet))}
      </FrequencyTableDisplay>
    </FrequencyTableWrapper>
  );
};
