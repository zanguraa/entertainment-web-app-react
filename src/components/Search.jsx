import React from "react";
import SearchImg from "../assets/icon-search.svg";
import styled from "styled-components";

function Search() {
  return (
    <LabelCont>
      <img src={SearchImg} alt="search" />
      <SearchInput type="search" placeholder="Search for movies or TV series" />
    </LabelCont>
  );
}

export default Search;

const LabelCont = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  background: inherit;
  outline: none;
  border: none;
  color: white;
  min-width: 215px;
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
