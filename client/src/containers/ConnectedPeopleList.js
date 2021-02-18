import { connect } from "react-redux";

import { PeopleList } from "../components/PeopleList";

const mapStateToProps = state => {
  return { people: state.people };
};

export const ConnectedPeopleList = connect(mapStateToProps)(PeopleList);

export default ConnectedPeopleList;
