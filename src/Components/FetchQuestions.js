import { useEffect, useState } from 'react';
import axios from 'axios';
import FetchAnswerCards from './FetchAnswerCards';
import styled from 'styled-components';

export default function FetchQuestions() {
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const initialCards = [
    {
      question: 'Loading...',
      correctAnswer: 'Loading...',
      incorrectAnswer: 'Loading',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    async function getCards() {
      setPage(0);
      setIsLoading(true);
      try {
        const request = await axios(
          `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean`
        );
        const data = request.data.results.map((card) => ({
          question: card.question
            .replace(/&quot;/g, '')
            .replace(/&#039;/g, '´')
            .replace(/&eacute;/g, 'e'),
          correctAnswer: card.correct_answer,
          incorrectAnswer: card.incorrect_answers,
        }));

        setCards(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getCards();
    // eslint-disable-next-line
  }, [load]);

  const handlePrevPage = () => {
    if (page >= 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page < cards.length - 1) {
      setPage((prevPage) => prevPage + 1);
    } else if (page === cards.length - 1) {
      setLoad(!load);
      setPage(0);
    }
  };

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <QuizWrapper>
      <h2>Question {page + 1}</h2>
      <button onClick={() => console.log(cards)}>add to favorites</button>
      <button onClick={() => console.log(cards[page].questions)}>
        Log Favorites
      </button>
      <ButtonWrapper>
        <button onClick={handlePrevPage}>Back</button>
        <FetchAnswerCards card={cards[page]} />

        <button onClick={handleNextPage}>Next</button>
      </ButtonWrapper>
    </QuizWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  /* border: solid white 1px; */
  justify-content: space-evenly;
  align-items: center;
`;

const QuizWrapper = styled.div`
  border: solid white 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  background: none;
  border-radius: 10px;
  width: 80%;
  /* height: 80vh; */
  margin-top: 5rem;

  h2,
  h3 {
    text-align: center;
    padding: 1rem;
  }
`;

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
