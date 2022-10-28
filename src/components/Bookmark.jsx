import React, {useState} from 'react'
import styled from 'styled-components';
import Header from './Header';
import MoviesCreator from './MoviesCreator';
import Search from './Search';
import MoviesData from "../data.json";

function Bookmark() {

  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const onlyBookmarks = MoviesData.filter(bookmark => bookmark.isBookmarked === true)

  return (
    <HomeCont>
    <Header path={"Series"}/>
    <Search value={onlyBookmarks} onChange={HandelClick} />
    <MoviesBody>
  <MoviesCreator data={onlyBookmarks} condition={searchValue} title={'TV Series'} />
  </MoviesBody>
  </HomeCont>
  )
}

export default Bookmark

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #10141e;
`;

const MoviesBody = styled.div`
  padding: 1rem;
`;