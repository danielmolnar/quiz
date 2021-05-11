import { useState } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import useQuizSearch from '../hooks/useQuizSearch';
import FetchAnswerCards from './FetchAnswerCards';
import LoadingSpinner from './assets/LoadingSpinner.gif';

export default function FetchQuestions() {
  const [load, setLoad] = useState(false);
  const { isLoading, setIsLoading, cards } = useQuizSearch({ load });
  const [completed, setCompleted] = useState([]);
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);

  return isLoading ? (
    <Wrapper isLoading={isLoading}>
      <Spinner src={LoadingSpinner} alt="Loading" isMobile={isMobile} />
    </Wrapper>
  ) : (
    <Wrapper>
      <p>{`Question ${page + 1}`}</p>
      <QuizWrapper>
        <h3>{cards[page].question}</h3>
      </QuizWrapper>
      <FetchAnswerCards
        load={load}
        page={page}
        cards={cards}
        score={score}
        setLoad={setLoad}
        setPage={setPage}
        setScore={setScore}
        completed={completed}
        setIsLoading={setIsLoading}
        setCompleted={setCompleted}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid var(--clr-bor) 2px;
  border-radius: 20px;
  margin-top: 1rem;
  height: ${({ isLoading }) => (isLoading ? '56vH' : '')};

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

const QuizWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 8rem;
  text-align: center;
  width: 100%;

  h3 {
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`;

const Spinner = styled.img`
  margin: auto;
  display: block;
  max-height: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
`;
