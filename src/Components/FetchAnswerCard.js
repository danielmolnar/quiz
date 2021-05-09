import styled from 'styled-components';

export default function AnswerCard({ card }) {
  const trueButton = 'True';
  const falseButton = 'False';

  const correctAnswer = card.correctAnswer;
  const incorrectAnswer = card.incorrectAnswer;

  let checker;

  // if (correctAnswer === trueButton) {
  //   checker = true;
  // } else checker = false;

  return (
    <Answer>
      <button onClick={() => console.log('correctAnswer')}>LOGGER</button>
      <button onClick={() => console.log('checker')}>Log</button>
      <button>{trueButton}</button>
      <button>{falseButton}</button>
    </Answer>
  );
}

const Answer = styled.div`
  display: flex;
  justify-content: space-around;

  border: solid white 1px;
  border: ${({ correct }) => correct && 'solid 2px green'};
  border: ${({ incorrect }) => incorrect && 'solid 2px red'};
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;

  button:first-child {
    margin-right: 2rem;
  }
`;
