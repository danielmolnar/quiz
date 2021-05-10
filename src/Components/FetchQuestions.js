import { useState } from 'react';
import FetchAnswerCards from './FetchAnswerCards';

import styled from 'styled-components';

import useQuizSearch from '../hooks/useQuizSearch';

export default function FetchQuestions() {
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(0);
  const { isLoading, setIsLoading, cards } = useQuizSearch({ load });
  const [show, setShow] = useState(false);

  const handlePrevPage = () => {
    setShow(false);
    if (page >= 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setShow(false);

    if (page === cards.length - 1) {
      setLoad(!load);
      setIsLoading(true);
    }
  };

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <Wrapper>
      <h2>Question {page + 1}</h2>
      <button onClick={() => console.log(cards)}>LOGGER</button>

      <QuizWrapper>
        <CardWrapper>
          <ButtonWrapper>
            <button onClick={handlePrevPage}>Back</button>
            <button onClick={handleNextPage}>Next</button>
          </ButtonWrapper>
          <FetchAnswerCards
            cards={cards}
            page={page}
            show={show}
            setShow={setShow}
          />
        </CardWrapper>
        {/* <button onClick={() => console.log(correct)}>Correct</button> */}
      </QuizWrapper>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const QuizWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: solid white 1px; */
  border-radius: 10px;
  width: 100%;

  margin-top: 5rem;

  h2,
  h3 {
    text-align: center;
    padding: 1rem;
  }
`;

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
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: solid white 1px;
`;

{
  /* <button onClick={() => setLoad(!load)}>add to favorites</button>
      <button onClick={() => console.log(cards[page].question)}>
        Log Favorites
      </button> */
}

// return (
//   <QuizWrapper>
//     <h2>Question {page}</h2>
//     <button onClick={() => addToFavorites(cardToShow)}>
//       add to favorites
//     </button>
//     <button onClick={() => console.log('abc')}>Log Favorites</button>
//     <ButtonWrapper>
//       <button onClick={handlePrevPage}>Back</button>
//       <FetchAnswerCards card={cardToShow} />
//         {/* question={cardToShow}
//         handleShow={handleShow}
//         show={show} */}

//       <button onClick={handleNextPage}>Next</button>
//     </ButtonWrapper>
//   </QuizWrapper>
// );
// }

// const initialCards = [
//   {
//     question: 'Loading...',
//     correctAnswer: 'Loading...',
//     incorrectAnswer: 'Loading',
//   },
// ];

// const [cards, setCards] = useState(initialCards);

// useEffect(() => {
//   async function getCards() {
//     setPage(0);
//     setIsLoading(true);
//     try {
//       const request = await axios(
//         `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean`
//       );
//       const data = request.data.results.map((card) => ({
//         question: card.question
//           .replace(/&quot;/g, '')
//           .replace(/&#039;/g, '´')
//           .replace(/&eacute;/g, 'e'),
//         correctAnswer: card.correct_answer,
//         incorrectAnswer: card.incorrect_answers,
//       }));

//       setCards(data);
//       setIsLoading(false);
//       console.log(data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   getCards();
//   // eslint-disable-next-line
// }, [load]);

// const handlePrevPage = () => {
//   if (page >= 1) {
//     setPage((prevPage) => prevPage - 1);
//   }
// };

// const handleNextPage = () => {
//   if (page < cards.length - 1) {
//     setPage((prevPage) => prevPage + 1);
//   } else if (page === cards.length - 1) {
//     setLoad(!load);
//     setPage(0);
//   }
// };
