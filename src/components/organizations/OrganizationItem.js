import React from "react";
import PropTypes from "prop-types";

const OrganizationItem = ({ organization }) => {
  return (
    <div className="card">
      <h3>
        <a href="#">{organization.login}</a>
      </h3>
    </div>
  );
};
OrganizationItem.propTypes = {
  organization: PropTypes.object.isRequired
};
export default OrganizationItem;
