import styled from 'styled-components';
import AnswerCards from './AnswerCards';
import { useState } from 'react';
import { questions } from '../data/questions';

export default function QuizCard() {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  const [favorites, setFavorites] = useState([]);
  const handleShow = () => setShow(!show);

  const cardToShow = questions.find((question) => question.id === page);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      setShow(false);
    }
  };

  const handleNextPage = () => {
    if (page < questions.length) {
      setPage((prevPage) => prevPage + 1);
      setShow(false);
    }
  };

  const addToFavorites = (cardToAdd) => {
    const isFavorite = (cardToAdd) =>
      favorites.some((card) => card.id === cardToAdd.id);

    isFavorite(cardToAdd)
      ? setFavorites(favorites.filter((card) => card.id !== cardToAdd.id))
      : setFavorites([...favorites, cardToAdd]);
  };

  return (
    <QuizWrapper>
      <h2>Question {page}</h2>
      <button onClick={() => addToFavorites(cardToShow)}>
        add to favorites
      </button>
      <button onClick={() => console.log('abc')}>Log Favorites</button>
      <ButtonWrapper>
        <button onClick={handlePrevPage}>Back</button>
        <AnswerCards
          question={cardToShow}
          handleShow={handleShow}
          show={show}
        />
        <button onClick={handleNextPage}>Next</button>
      </ButtonWrapper>
    </QuizWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  border: solid white 1px;
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
