import { useState } from 'react';
import styled from 'styled-components';

export default function AnswerCard({ answer, show, handleShow }) {
  return (
    <Answer
      correct={answer.correct && show}
      incorrect={answer.correct === false && show}
      onClick={handleShow}
    >
      <p>{answer.answer}</p>
      <p>{answer.correct === true ? 'Correct!' : 'Wrong!'}</p>
    </Answer>
  );
}

const Answer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  border: solid white 1px;
  border: ${({ correct }) => correct && 'solid 2px green'};
  border: ${({ incorrect }) => incorrect && 'solid 2px red'};
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
`;
