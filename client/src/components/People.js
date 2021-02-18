import React from "react";
import styled from "styled-components";

import { ConnectedPeopleList } from "../containers/ConnectedPeopleList";

const Page = styled.div`
  display: grid;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;

export const PeoplePage = () => {
  return (
    <Page>
      <ConnectedPeopleList></ConnectedPeopleList>
    </Page>
  );
};
