import React from "react";
import Todos from "./components/Todos";
import styled from "styled-components";
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <Todos />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
