import React from "react";
import SearchImg from "../assets/icon-search.svg";
import styled from "styled-components";

function Search(props) {
  return (
    <LabelCont>
      <img src={SearchImg} alt="search" />
      <SearchInput
        value={props.value}
        onChange={props.onChange}
        style={{ fontFamily: "outfit" }}
        type="search"
        id="search"
        placeholder="Search for movies or TV series"
      />
    </LabelCont>
  );
}

export default Search;

const LabelCont = styled.label`
  display: flex;
  gap: auto;
  align-items: center;
  padding: 1rem;
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
  @media (min-width: 768px) {
    min-width: 321px;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
