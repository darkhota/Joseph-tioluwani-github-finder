import React from "react";
import PropTypes from "prop-types";
import OrganizationItem from "./OrganizationItem";
const Organizations = ({ organizations }) => {
  return organizations.map(organization => (
    <OrganizationItem organization={organization} key={organization.id} />
  ));
};

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired
};
export default Organizations;
