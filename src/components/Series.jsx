import React from 'react'
import MoviesCreator from './MoviesCreator'
import MoviesData from '../data.json';
import Header from './Header';
import Search from './Search';
import styled from 'styled-components';

function Series() {

    const onlySeries = MoviesData.filter(series => series.category === 'TV Series')

  return (
    <HomeCont>
      <Header path={"Series"}/>
      <Search />
      <MoviesBody>
    <MoviesCreator data={onlySeries} />
    </MoviesBody>
    </HomeCont>
  )
}

export default Series;

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #10141e;
`;

const MoviesBody = styled.div`
  padding: 1rem;
`;