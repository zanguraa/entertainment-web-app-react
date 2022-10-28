import React, {useState} from "react";
import MoviesCreator from "./MoviesCreator";
import MoviesData from "../data.json";
import Header from "./Header";
import Search from "./Search";
import styled from "styled-components";

function Movies(props) {
  const onlyMovies = MoviesData.filter((series) => series.category === "Movie");

  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <HomeCont>
      <Header path={"Movies"} />
      <Search value={searchValue} onChange={HandelClick} />
      <MoviesBody>
        <MoviesCreator data={onlyMovies} title="Movies" condition={searchValue}/>
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
