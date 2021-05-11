import styled from 'styled-components';

import FetchQuestions from './Components/FetchQuestions';

function App() {
  return (
    <MainWrapper>
      <h1>Gaming Trivia</h1>
      <Wrapper>
        <FetchQuestions />
      </Wrapper>
    </MainWrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1020px;
  min-height: 100vh;
  margin: 0 auto;

  h1 {
    text-align: center;
    padding: 2rem;
  }
`;
