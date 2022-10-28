import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  TvSeriesIcon,
  HomeIcon,
  BookmarkIcon,
  MoviesLogo,
  MoviesIcon,
  UserProfile,
} from "../assets/index";

function Header(props) {
  let path = props.path;

  return (
    <HeaderCont>
      <img
        style={{ width: "25px", height: "20px" }}
        src={MoviesLogo}
        alt="logo"
      />
      <IconCont>
        <NavLink to="/entertainment-web-app-react/">
          {path === "Home" ? (
            <img
              path="/entertainment-web-app-react/"
              src={HomeIcon}
              alt="home"
            />
          ) : (
            <img
              path="/entertainment-web-app-react/"
              style={{ hover: "red" }}
              src={HomeIcon}
              alt="home"
            />
          )}
        </NavLink>

        <NavLink to="/entertainment-web-app-react/movies">
          {path === "Movies" ? (
            <img
              path="/entertainment-web-app-react/movies"
              src={MoviesIcon}
              alt="movies"
            />
          ) : (
            <img
              path="/entertainment-web-app-react/movies"
              src={MoviesIcon}
              alt="movies"
            />
          )}
        </NavLink>

        <NavLink to="/entertainment-web-app-react/series">
          {path === "Series" ? (
            <img
              path="/entertainment-web-app-react/series"
              src={TvSeriesIcon}
              alt="tv-series"
            />
          ) : (
            <img
              path="/entertainment-web-app-react/series"
              style={{ hover: "red" }}
              src={TvSeriesIcon}
              alt="tv-series"
            />
          )}
        </NavLink>
        <NavLink to="/entertainment-web-app-react/bookmark">
          {path === "Series" ? (
            <img
              path="/entertainment-web-app-react/bookmark"
              src={BookmarkIcon}
              alt="bookmarks"
            />
          ) : (
            <img
              path="/entertainment-web-app-react/bookmark"
              src={BookmarkIcon}
              alt="bookmark"
            />
          )}
        </NavLink>
      </IconCont>
      <img
        style={{
          width: "24px",
          height: "24px",
          border: "1px solid #FFFFFF",
          borderRadius: "50%",
        }}
        src={UserProfile}
        alt="user-profile"
      />
    </HeaderCont>
  );
}

export default Header;

const HeaderCont = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #161d2f;
  img {
    width: 1rem;
    height: 1rem;
  }
  @media (min-width: 768px) {
    margin: 1.5rem;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const IconCont = styled.div`
  display: flex;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
