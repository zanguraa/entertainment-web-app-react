import React, { useState } from "react";
import MoviesCreator from "./MoviesCreator";
import MoviesData from "../data.json";
import Header from "./Header";
import Search from "./Search";
import styled from "styled-components";

function Movies() {
  const onlyMovies = MoviesData.filter((series) => series.category === "Movie");

  const [value, setValue] = useState("");

  const HandelClick = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <HomeCont>
      <Header path={"Movies"} />
      <Search value={value} onChange={HandelClick} />
      <MoviesBody>
      {value.length > 0 ? 
      
        <MoviesCreator data={onlyMovies} condition={value} /> :
       ( <MoviesCreator data={onlyMovies} condition={value.trim()} />) }
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
