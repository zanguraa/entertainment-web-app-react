import React, {useState} from 'react'
import MoviesCreator from './MoviesCreator'
import MoviesData from '../data.json';
import Header from './Header';
import Search from './Search';
import styled from 'styled-components';

function Series({ data, setData }) {

  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

    const onlySeries = MoviesData.filter(series => series.category === 'TV Series')

  return (
    <HomeCont>
      <Header path={"Series"}/>
    
      <MoviesBody>
      <Search value={searchValue} onChange={HandelClick} />
    <MoviesCreator data={onlySeries} setData={setData} condition={searchValue} title={'TV Series'} />
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
