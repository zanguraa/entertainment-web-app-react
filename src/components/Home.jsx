import React from "react";
import Search from "./Search";
import Header from "./Header";
import styled from "styled-components";
import TrendingSlider from "./TrendingSlider";
import MoviesData from '../data.json';
import MoviesCreator from "./MoviesCreator";

function Home() {

  const allMovies = MoviesData.map((movie, index)=> {
    return movie
  })


  return (
    <HomeCont>
      <Header path={"/"} />
      <Search />
      <MoviesBody>
      <TrendingSlider MoviesData={MoviesData} />
        <MoviesCreator data={allMovies} />
      </MoviesBody>
    </HomeCont>
  );
}

export default Home;

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #10141e;
`;

const MoviesBody = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;
