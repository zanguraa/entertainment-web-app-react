import React from "react";
import MoviesCreator from "./MoviesCreator";
import MoviesData from "../data.json";
import Header from "./Header";
import Search from "./Search";
import styled from "styled-components";

function Movies() {
  const onlyMovies = MoviesData.filter((series) => series.category === "Movie");

  return (
    <HomeCont>
      <Header path={"Movies"} />
      <Search />
      <MoviesBody>
        <MoviesCreator data={onlyMovies} />
      </MoviesBody>
    </HomeCont>
  );
}

export default Movies;

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #10141e;
`;

const MoviesBody = styled.div`
  padding: 1rem;
`;
