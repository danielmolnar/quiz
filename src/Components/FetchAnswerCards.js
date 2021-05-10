import styled from 'styled-components';
import { useState } from 'react';

export default function FetchAnswerCards({ cards, page, show, setShow }) {
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(0);

  function getBool(val) {
    const num = +val;
    return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0, '');
  }

  let correctChecker;
  const correct = +getBool(cards[page].correctAnswer);

  if (correct === 1 && show) {
    correctChecker = true;
  } else correctChecker = false;

  const handleButtonClick = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (!submit) {
      setScore((prev) => prev + value);
      setSubmit(true);
    }
    setShow(!show);
  };

  return (
    <CardWrapper>
      <h3>{cards[page].question}</h3>
      <Answer>
        <TrueButton
          value={correct ? 1 : 0}
          correct={correctChecker}
          onClick={handleButtonClick}
          show={show}
        >
          True
        </TrueButton>
        <FalseButton
          value={correct ? 0 : 1}
          correct={correctChecker}
          onClick={handleButtonClick}
          show={show}
        >
          False
        </FalseButton>
      </Answer>
    </CardWrapper>
  );
}

const TrueButton = styled.button`
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  background: transparent;
  color: white;
  border: solid white 1px;
  border: ${({ correct }) => (correct ? 'solid 2px green' : 'solid 2px red')};
  border: ${({ show }) => !show && 'solid 2px white'};
`;

const FalseButton = styled.button`
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  background: transparent;
  color: white;
  border: solid white 1px;
  border: ${({ correct }) => (!correct ? 'solid 2px green' : 'solid 2px red')};
  border: ${({ show }) => !show && 'solid 2px white'};
`;

const Answer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;

  button {
  }

  button:first-child {
    margin-right: 2rem;
    /* border: ${({ correct }) =>
      correct ? 'solid 2px green' : 'solid 2px red'}; */
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: solid white 1px;
`;

// const Answers = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   flex-wrap: wrap;
//   border-radius: 10px;
//   padding: 2rem;
//   width: 100%;
// `;

// {card.map((answer) => (
//   <AnswerCard
//     answer={answer}
//     key={answer.id}
//     show={show}
//     handleShow={handleShow}
//   />
// ))}
