import styled from 'styled-components';
import FetchAnswerCard from './FetchAnswerCard';

export default function FetchAnswerCards({ card }) {
  return (
    <CardWrapper>
      <button onClick={() => console.log(card)}></button>
      <h3>{card.question}</h3>
      <FetchAnswerCard card={card} />
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

// {card.map((answer) => (
//   <AnswerCard
//     answer={answer}
//     key={answer.id}
//     show={show}
//     handleShow={handleShow}
//   />
// ))}
