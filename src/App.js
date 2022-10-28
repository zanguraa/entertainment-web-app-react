import styled from "styled-components";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Bookmark from "./components/Bookmark";

function App() {
  return (
    <MainCont>
      <BrowserRouter>
        <Routes base>
          <Route path="/entertainment-web-app-react/" element={<Home />} />
          <Route
            path="/entertainment-web-app-react/movies"
            element={<Movies />}
          />
          <Route
            path="/entertainment-web-app-react/series"
            element={<Series />}
          />
           <Route
            path="/entertainment-web-app-react/bookmark"
            element={<Bookmark />}
          />
        </Routes>
      </BrowserRouter>
    </MainCont>
  );
}

export default App;

const MainCont = styled.div``;
