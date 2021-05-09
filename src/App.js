import styled from 'styled-components';
import QuizCard from './Components/QuizCard';
import FetchQuestions from './Components/FetchQuestions';

function App() {
  return (
    <Wrapper>
      <h1>Quiz App</h1>
      {/* <QuizCard /> */}
      <FetchQuestions />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 80%;
  max-width: 1020px;
  min-height: 100vh;
  margin: 0 auto;
  border: solid white 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
