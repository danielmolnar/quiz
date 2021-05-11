import axios from 'axios';
import { useEffect, useState } from 'react';
import { replaceEntity } from '../lib/helperFunctions';

export default function useQuizSearch({ load }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCards() {
      setIsLoading(true);
      try {
        const request = await axios(
          `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean`
        );
        const data = request.data.results.map((card) => ({
          question: replaceEntity(card.question),
          correctAnswer: card.correct_answer,
          incorrectAnswer: card.incorrect_answers,
        }));
        setCards([...cards, ...data]);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getCards();
  }, [load]);

  return { cards, isLoading, setIsLoading };
}
