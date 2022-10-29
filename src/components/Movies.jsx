import React, { useState } from "react";
import MoviesCreator from "./MoviesCreator";
import MoviesData from "../data.json";
import Header from "./Header";
import Search from "./Search";
import styled from "styled-components";

function Movies({ data, setData }) {
  const onlyMovies = MoviesData.filter((series) => series.category === "Movie");

  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <HomeCont>
      <Header path={"Movies"} />
      
      <MoviesBody>
      <Search value={searchValue} onChange={HandelClick} />
        <MoviesCreator
          data={onlyMovies}
          setData={setData}
          title="Movies"
          condition={searchValue}
        />
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
 @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

const MoviesBody = styled.div`
  padding: 1rem;
 @media screen and (min-width: 768px) {
    padding: 1.25rem;
  }
`;

