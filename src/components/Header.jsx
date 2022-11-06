import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  TvSeriesIcon,
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
        <NavLink
        
        style={{
          opacity: path === "/" ? .26 : 1
        }}
          to="/entertainment-web-app-react/"
        >
          {path === "/" ? (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill="#5A698F"
              />
            </svg>
          ) : (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill="#5A698F"
              />
            </svg>
          )}
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "0.26" } : { opacity: "1" }
          }
          to="/entertainment-web-app-react/movies"
        >
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

        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "0.26" } : { opacity: "1" }
          }
          to="/entertainment-web-app-react/series"
        >
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
        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "0.26" } : { opacity: "1" }
          }
          to="/entertainment-web-app-react/bookmark"
        >
          <svg
            path="/entertainment-web-app-react/bookmark"
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            />
          </svg>
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
      width: 1.25rem;
      height: 1.25rem;
    }
  @media screen and (min-width: 768px) {
    margin: 1.5rem;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: column;
      justify-content: flex-start;
      gap: 5rem;
      height: 960px;
      margin: 0;
    }
  }
`;

const IconCont = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    height: 960px;
  }
`;
