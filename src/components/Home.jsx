import React from "react";
import Search from "./Search";
import Header from "./Header";
import styled from "styled-components";

function Home() {
  return (
    <HomeCont>
      <Header />
      <MoviesBody>
        <Search />
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
`;
