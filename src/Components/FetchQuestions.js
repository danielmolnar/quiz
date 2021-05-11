import { useState } from 'react';
import FetchAnswerCards from './FetchAnswerCards';

import styled from 'styled-components';

import useQuizSearch from '../hooks/useQuizSearch';

export default function FetchQuestions() {
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(0);
  const { isLoading, setIsLoading, cards } = useQuizSearch({ load });
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState([]);

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <Wrapper>
      <p>{`Question ${page + 1}`}</p>
      <QuizWrapper>
        <h3>{cards[page].question}</h3>
      </QuizWrapper>
      <FetchAnswerCards
        cards={cards}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        load={load}
        setLoad={setLoad}
        page={page}
        setPage={setPage}
        score={score}
        setScore={setScore}
        completed={completed}
        setCompleted={setCompleted}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid white 2px;
  border-radius: 10%;

  p {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const QuizWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 8rem;
  text-align: center;
  width: 100%;

  h3 {
    padding: 0 0.5rem;
    line-height: 1.5;
  }
`;
