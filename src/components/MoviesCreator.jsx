import React from "react";
import styled from "styled-components";
import {
  MoviesIcon,
  BookmarkSaved,
  BookmarkFull,
  Oval,
  PlayIcon,
} from "../assets/index";

function MoviesCreator({ data, setData, title, condition }) {
  const bookmarkHandler = (title) => {
    const isBookmarked = data.map((bookmark, index) => {
      if (bookmark.title === title) {
        bookmark.isBookmarked = !bookmark.isBookmarked;
        console.log(title);
      }
      return bookmark;
    });
    setData(isBookmarked);
  };

  const filteredMovies = condition.trim().toLowerCase()
    ? data.filter((movie) =>
        movie.title.toLowerCase().includes(condition.trim().toLowerCase())
      )
    : data;

  return (
    <Container>
      <h2 style={{ color: "white" }}>{title}</h2>
      <MoviesConfig>
        {filteredMovies.map((movie, index) => {
          return (
            <MovieSingle key={index}>
              <ImgCont>
                <HoverDiv>
                  <img src={PlayIcon} alt="play" />
                </HoverDiv>
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                  src={process.env.PUBLIC_URL + movie.thumbnail.regular.large}
                  alt="movies-poster"
                />
              </ImgCont>

              <div
                style={{
                  position: "absolute",
                  top: "5%",
                  right: "8%",
                  background: "#10141E",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {" "}
                <img
                  onClick={() => bookmarkHandler(movie.title)}
                  style={{ width: "11x", height: "14px", zIndex: "0" }}
                  src={movie.isBookmarked ? BookmarkFull : BookmarkSaved}
                  alt="bookmark-saved"
                />
              </div>

              <MovieInfo>
                <div>
                  <p>{movie.year} </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <img src={Oval} alt="oval" />
                    <ImgMovie src={MoviesIcon} alt="movies" /> {movie.category}{" "}
                    <img src={Oval} alt="oval" />
                  </p>
                  <p>{movie.rating}</p>
                </div>
                <h4>{movie.title}</h4>
              </MovieInfo>
            </MovieSingle>
          );
        })}
      </MoviesConfig>
    </Container>
  );
}

export default MoviesCreator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MoviesConfig = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.75rem;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const MovieSingle = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: auto;
  height: 100%;
  @media screen and (min-width: 768px) {
  }
`;
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;

  div {
    display: flex;
    gap: 0.5rem;
  }
  p {
    margin: 0;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
  }
`;

const ImgMovie = styled.img`
  width: 10px;
  height: 10px;
  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const ImgCont = styled.div`
  position: relative;
`;

const HoverDiv = styled.div`
  position: absolute;
  top: 37%;
  left: 30%;
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 1;
    transition: all 0.3s;
  }
  img {
    width: 117px;
    height: 50px;
    width: 65px;
    height: 32px;
  }
  @media screen and (min-width: 768px) {
    top: 40%;
    left: 30%;
    img {
      width: 117px;
      height: 50px;
    }
  }
`;
