import styled from "styled-components";
import Form from "./assets/Form";

const Container = styled.section`
  background-color: #ebf4f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
