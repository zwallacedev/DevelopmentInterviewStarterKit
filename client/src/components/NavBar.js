import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { fetchMe, fetchPeopleList } from "../actions/AsyncActions";

const NAV_HEIGHT = 46;
const AVATAR_HEIGHT = 40;
const AVATAR_WIDTH = 40;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;

  margin: 0px;
  padding 0px;
  height: ${NAV_HEIGHT}px;
  width: 100%;
`;

let NavText = styled.p`
  color: #4a90e2;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

let NavButton = styled.button`
  color: #4a90e2;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  background: none;
  border: none;
  font-size: 25px;
  font-weight: bold;
`;
const Badge = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

let SignInBadge = () => (
  <Badge>
    <a href="/users/auth/salesloft" style={{ textDecoration: "none" }}>
      <NavText>Login</NavText>
    </a>
  </Badge>
);

let UserBadge = ({ user }) => (
  <Badge>
    <NavButton
      type="button"
      onClick={() => alert("Sorry, this feature is currently unavailable.")}
    >
      {user.name}
    </NavButton>
  </Badge>
);

const PeopleListButton = withRouter(({ history }) => (
  <Badge>
    <NavButton
      type="button"
      onClick={() => {
        store.dispatch(fetchPeopleList());
        history.push("/people");
      }}
    >
      People List
    </NavButton>
  </Badge>
));

const Home = withRouter(({ history }) => (
  <Badge>
    <NavButton
      type="button"
      onClick={() => {
        store.dispatch(fetchMe());
        history.push("/");
      }}
    >
      Home
    </NavButton>
  </Badge>
));
let NavBar = ({ user }) => {
  return (
    <StyledNavBar>
      <Home></Home>
      <PeopleListButton></PeopleListButton>
      {user ? <UserBadge user={user} /> : <SignInBadge />}
    </StyledNavBar>
  );
};

export default NavBar;
