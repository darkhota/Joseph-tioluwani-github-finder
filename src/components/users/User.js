import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import Organizations from "../organizations/Organizations";
import {
  getUser,
  getUserRepos,
  getUserOrganizations
} from "../../actions/gitHubActions";

const User = ({
  match,
  github: { user, repos, loading, organizations },
  getUser,
  getUserRepos,
  getUserOrganizations
}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserOrganizations(match.params.login);
    getUserRepos(match.params.login);

    // eslint-disable-next-line
  }, []);

  console.log(organizations);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong> Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong> Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-white">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <h2>Repositories (Most recent 5)</h2>
      <Repos repos={repos} />
      <h2>Organizations</h2>
      {organizations.length >= 1 ? (
        <>
          <Organizations organizations={organizations} />
        </>
      ) : (
        <p>no public organizations...</p>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  github: state.github
});
export default connect(mapStateToProps, {
  getUser,
  getUserRepos,
  getUserOrganizations
})(User);
