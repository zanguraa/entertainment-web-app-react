import React from "react";
import styled from "styled-components";
import { MoviesIcon, BookmarkSaved, Oval } from "../assets/index";



function MoviesCreator({ data, setData, title, condition }) {


const bookmarkHandler = (title)=> {

  const isBookmarked = data.map((bookmark, index)=> {
    if(bookmark.title === title){
      bookmark.isBookmarked = !bookmark.isBookmarked;
      console.log(title)
    }
return bookmark;
  })
setData(isBookmarked);
}



  const filteredMovies = condition.trim().toLowerCase()
    ? data.filter((movie) =>
        movie.title.toLowerCase().includes(condition.trim().toLowerCase())
      )
    : data;




  return (
    <div>
      <h2 style={{ color: "white" }}>{title}</h2>
      <MoviesConfig>
        {filteredMovies.map((movie, index) => {
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
                onClick={()=> bookmarkHandler(movie.title)}
                  style={{ width: "11x", height: "14px" }}
                  src={BookmarkSaved}
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
                    <img
                      style={{ height: "10px", width: "10px" }}
                      src={MoviesIcon}
                      alt="movies"
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

export default MoviesCreator;

const MoviesConfig = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MovieSingle = styled.div`
  flex-basis: 40%;
  position: relative;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    flex-basis: 30%;
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
`;
