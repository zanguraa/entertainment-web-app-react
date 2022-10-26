import styled from "styled-components";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Series from "./components/Series";
import Movies from "./components/Movies";

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
        </Routes>
      </BrowserRouter>
    </MainCont>
  );
}

export default App;

const MainCont = styled.div``;
