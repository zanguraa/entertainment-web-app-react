import React, { useState } from "react";
import Search from "./Search";
import Header from "./Header";
import styled from "styled-components";
import TrendingSlider from "./TrendingSlider";
import MoviesData from "../data.json";
import MoviesCreator from "./MoviesCreator";

function Home({ data, setData }) {
  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const allMovies = MoviesData.map((movie, index) => {
    return movie;
  });

  return (
    <HomeCont>
      <Header path={"/"} />

      <MoviesBody>
        <Search value={searchValue} onChange={HandelClick} />
        {searchValue.length > 0 ? (
          <MoviesCreator
            data={allMovies}
            setData={setData}
            condition={searchValue}
          />
        ) : (
          <>
            <TrendingSlider MoviesData={MoviesData} />
            <MoviesCreator
              data={allMovies}
              setData={setData}
              condition={searchValue.trim()}
              title="Recommended for you"
            />
          </>
        )}
      </MoviesBody>
    </HomeCont>
  );
}

export default Home;

const HomeCont = styled.div`
  display: flex;
  width: 100%;
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
