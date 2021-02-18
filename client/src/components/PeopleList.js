import React from "react";
import styled from "styled-components";

import { ConnectedNavBar } from "../containers/ConnectedNavBar";
import { PersonIndividual } from "./PersonIndividual";

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

const ColumnHeaders = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PeopleList = ({ people }) => {
  if (!(people && people.list)) {
    return (
      <div>
        Unfortunately, the people didn't load :(.{" "}
        <a href="https://http.cat/404">Check out this cute cat</a>
      </div>
    );
  }

  const DisplayPerson = person => {
    const isFrequencyActive =
      people &&
      people.showFrequencyForIds &&
      people.showFrequencyForIds.includes(person.id);

    const isSuggestionActive =
      people &&
      people.showSuggestionForIds &&
      people.showSuggestionForIds.includes(person.id);

    const splitEmailMain = person.email_address.split("@")[0];
    const regexMain = new RegExp(splitEmailMain);

    // not great performance. I'd do an ElasticSearch fuzzy search (ideally).
    let similarPeople = people.list.filter(p => {
      if (p.id === person.id) return false;

      const splitEmailFromList = p.email_address.split("@")[0];
      const regexFromList = new RegExp(splitEmailFromList);

      return (
        regexMain.test(splitEmailFromList) || regexFromList.test(splitEmailMain)
      );
    });

    return PersonIndividual(
      person,
      isFrequencyActive,
      isSuggestionActive,
      similarPeople
    );
  };

  return (
    <Page>
      <ConnectedNavBar></ConnectedNavBar>
      <PersonTable>
        <Header>List of People</Header>
        <ColumnHeaders>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Title</h3>
        </ColumnHeaders>
        {people &&
          people.list &&
          people.list.map(person => DisplayPerson(person))}
      </PersonTable>
    </Page>
  );
};
