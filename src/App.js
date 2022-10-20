import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <MainCont>
      <Header />
    </MainCont>
  );
}

export default App;

const MainCont = styled.div`
  display: flex;
`;
