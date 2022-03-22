import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = ({ github: { users, loading } }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

const mapStateToProps = state => ({
  github: state.github
});

export default connect(mapStateToProps)(Users);
