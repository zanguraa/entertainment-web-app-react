import React from "react";
import styled from "styled-components";
import Images, {
  TvSeriesIcon,
  HomeIcon,
  BookmarkIcon,
  MoviesLogo,
  MoviesIcon,
  UserProfile,
} from "../assets/index";

function header() {
  return (
    <HeaderCont>
      <img style={{width: '25px', height: '20px'}} src={MoviesLogo} alt="logo" />
      <IconCont>
        <img  src={HomeIcon} alt="home" />
        <img src={MoviesIcon} alt="movies" />
        <img src={TvSeriesIcon} alt="tv-series" />
        <img src={BookmarkIcon} alt="bookmarks" />
      </IconCont>
      <img style={{width: '24px', height: '24px'}} src={UserProfile} alt="user-profile" />
    </HeaderCont>
  );
}

export default header;

const HeaderCont = styled.div`
padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
 
  background: #161d2f;
  img {
    width: 1rem;
    height: 1rem;
  }
`;

const IconCont = styled.div`
  display: flex;
  gap: 1rem;
`;
