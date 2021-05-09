import styled from 'styled-components';
import { useState } from 'react';
import AnswerCard from './AnswerCard';

export default function AnswerCards({ question, handleShow, show }) {
  return (
    <CardWrapper>
      <h3>{question.question}</h3>
      <Answers>
        {question.answers.map((answer) => (
          <AnswerCard
            answer={answer}
            key={answer.id}
            show={show}
            handleShow={handleShow}
          />
        ))}
      </Answers>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: solid white 1px;
`;

const Answers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
`;

// const Answer = styled.div`
//   display: flex;
//   flex-direction: column;

//   align-items: center;
//   border: solid white 1px;
//   border: ${({ correct }) => correct && 'solid 2px green'};
//   border: ${({ incorrect }) => incorrect && 'solid 2px red'};
//   border-radius: 10px;
//   padding: 1rem;
//   cursor: pointer;
// `;

// <Answer
// key={answer.id}
// correct={answer.correct && show}
// incorrect={answer.correct === false && show}
// onClick={handleShow}
// >
// <p>{answer.answer}</p>
// <p>{answer.correct === true ? 'Correct!' : 'Wrong!'}</p>
// </Answer>
