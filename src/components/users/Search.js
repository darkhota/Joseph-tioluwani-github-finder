import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { clearUsers, searchUsers } from "../../actions/gitHubActions";

const Search = ({ github: { users }, setAlert, clearUsers, searchUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className=" btn btn-light btn-block" onClick={clearUsers}>
          {" "}
          Clear
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  github: state.github
});

export default connect(mapStateToProps, { clearUsers, setAlert, searchUsers })(
  Search
);
