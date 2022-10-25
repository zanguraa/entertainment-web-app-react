import React from "react";
import styled from "styled-components";
import { MoviesIcon, BookmarkSaved, Oval } from "../assets/index";

function Movies({ MoviesData }) {
  return (
    <div>
      <h2 style={{ color: "white" }}>Recommended for you</h2>
      <MoviesConfig>
        {MoviesData.map((movie, index) => {
          return (
            <MovieSingle style={{ flexBasis: "40%" }} key={index}>
              <img
                style={{
                  minWidth: "163px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
                src={process.env.PUBLIC_URL + movie.thumbnail.regular.large}
                alt="movies-poster"
              />
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
                }}
              >
                {" "}
                <img
                  style={{ width: "11x", height: "14px" }}
                  src={BookmarkSaved}
                  alt="bookmark-saved"
                />
              </div>

              <MovieInfo>
                <div>
                  <p>{movie.year} </p>
                  <p style={{ display: "flex", alignItems: 'center', gap: '0.5rem' }}>
                    <img src={Oval} alt="oval" />
                    <img
                      style={{ height: "10px", width: "10px" }}
                      src={MoviesIcon}
                    />{" "}
                    {movie.category} <img src={Oval} alt="oval" />
                  </p>
                  <p>{movie.rating}</p>
                </div>
                <h4>{movie.title}</h4>
              </MovieInfo>
            </MovieSingle>
          );
        })}
      </MoviesConfig>
    </div>
  );
}

export default Movies;

const MoviesConfig = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

const MovieSingle = styled.div`
  flex-basis: 40%;
  position: relative;
  margin-bottom: 1rem;
  /* img {
    width: 164px;
    height: 110px;
    border-radius: 8px;
  } */
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
`;
