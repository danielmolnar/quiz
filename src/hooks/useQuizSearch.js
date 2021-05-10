import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useQuizSearch({ load }) {
  const initialCard = [
    {
      question: 'Loading...',
      correctAnswer: 'Loading...',
      incorrectAnswer: 'Loading...',
    },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(initialCard);

  useEffect(() => {
    async function getCards() {
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
        cards === initialCard ? setCards(data) : setCards([...cards, ...data]);

        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }
    getCards();
    // eslint-disable-next-line
  }, [load]);

  return { isLoading, cards, setIsLoading };
}
