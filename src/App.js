import React, { useState } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Bookmark from "./components/Bookmark";
import MoviesData from "./data.json";

function App() {
  const [data, setData] = useState(MoviesData);

  return (
    <MainCont>
      <BrowserRouter>
        <Routes base>
          <Route
            path="/entertainment-web-app-react/"
            element={<Home data={data} setData={setData} />}
          />
          <Route
            path="/entertainment-web-app-react/movies"
            element={<Movies data={data} setData={setData} />}
          />
          <Route
            path="/entertainment-web-app-react/series"
            element={<Series data={data} setData={setData} />}
          />
          <Route
            path="/entertainment-web-app-react/bookmark"
            element={<Bookmark data={data} setData={setData} />}
          />
        </Routes>
      </BrowserRouter>
    </MainCont>
  );
}

export default App;

const MainCont = styled.div``;
