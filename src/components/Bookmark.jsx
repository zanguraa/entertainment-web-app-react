import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MoviesCreator from "./MoviesCreator";
import Search from "./Search";

function Bookmark({ data, setData }) {
  const bookmarkHandler = (title) => {
    const isBookmarked = data.filter((bookmark) => {
      if (bookmark.title === title) {
        bookmark.isBookmarked = !bookmark.isBookmarked;
      }
      return bookmark;
    });
    setData(isBookmarked);
  };

  const [searchValue, setSearchValue] = useState("");

  const HandelClick = (e) => {
    setSearchValue(e.target.value);
  };

  const onlyBookmarks = data.filter(
    (bookmark) => bookmark.isBookmarked === true
  );

  return (
    <HomeCont>
      <Header path={"Series"} />

      <MoviesBody>
        <Search value={searchValue} onChange={HandelClick} />
        <MoviesCreator
          data={onlyBookmarks}
          setData={setData}
          bookmarkHandler={bookmarkHandler}
          condition={searchValue}
          title={"Bookmarks"}
        />
      </MoviesBody>
    </HomeCont>
  );
}

export default Bookmark;

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
