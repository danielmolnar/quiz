import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { RightArrowCircle } from '@styled-icons/boxicons-solid/RightArrowCircle';
import { LeftArrowCircle } from '@styled-icons/boxicons-solid/LeftArrowCircle';
import { SmileBeam } from '@styled-icons/fa-solid/SmileBeam';
import { Shocked2 } from '@styled-icons/icomoon/Shocked2';
import { SadCry } from '@styled-icons/fa-solid/SadCry';
import { getBool } from '../lib/helperFunctions';

export default function FetchAnswerCards({
  load,
  page,
  cards,
  score,
  setLoad,
  setPage,
  setScore,
  completed,
  setIsLoading,
  setCompleted,
}) {
  const [show, setShow] = useState(false);

  const correct = +getBool(cards[page].correctAnswer);
  const answeredPage = (page + 1).toString();
  const answered = completed.includes(answeredPage);
  const reveal = completed.includes((page + 1).toString());
  const ratio = score / completed.length;
  const shockScore = ratio >= 0.35 && ratio <= 0.5;
  const goodScore = ratio > 0.5;

  useEffect(() => {
    reveal ? setShow(true) : setShow(false);
  }, [page]);

  let isCorrect;
  if (correct === 1 && show) {
    isCorrect = true;
  } else isCorrect = false;

  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page + 1 <= completed.length) {
      setPage((prevPage) => prevPage + 1);
      if (page === cards.length - 1) {
        setLoad(!load);
        setIsLoading(true);
      }
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value);
    !answered && setCompleted([...completed, answeredPage]);
    answered ? alert('Nice Try') : setScore((prev) => prev + value);
    setShow(true);
  };

  return (
    <>
      <ButtonWrapper>
        <BackIcon onClick={handlePrevPage} isMobile={isMobile} />
        <TrueButton
          show={show}
          correct={isCorrect}
          value={correct ? 1 : 0}
          onClick={handleButtonClick}
        >
          True
        </TrueButton>
        <FalseButton
          show={show}
          correct={isCorrect}
          value={correct ? 0 : 1}
          onClick={handleButtonClick}
        >
          False
        </FalseButton>
        <NextIcon onClick={handleNextPage} isMobile={isMobile} />
      </ButtonWrapper>
      <ScoreWrapper>
        <p>{`Score: ${score}/${completed.length}`}</p>
        {completed.length === 0 ? null : goodScore ? (
          <SmileIcon />
        ) : shockScore ? (
          <ShockIcon />
        ) : (
          <SadIcon />
        )}
      </ScoreWrapper>
    </>
  );
}

FetchAnswerCards.propTypes = {
  load: PropTypes.bool,
  page: PropTypes.number,
  cards: PropTypes.array,
  score: PropTypes.number,
  setLoad: PropTypes.func,
  setPage: PropTypes.func,
  setScore: PropTypes.func,
  completed: PropTypes.array,
  setIsLoading: PropTypes.func,
  setCompleted: PropTypes.func,
};

const TrueButton = styled.button`
  border: ${({ correct }) => (correct ? 'solid 2px green' : 'solid 2px red')};
  border: ${({ show }) => !show && 'solid 2px var(--clr-bor)'};
  background: none;
  border-radius: 10px;
  color: var(--fc);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 6rem;
  padding: 1rem;

  &:hover {
    background: var(--clr-btn-hov);
  }
`;

const FalseButton = styled.button`
  border: ${({ correct }) => (correct ? 'solid 2px red' : 'solid 2px green')};
  border: ${({ show }) => !show && 'solid 2px var(--clr-bor)'};
  background: none;
  border-radius: 10px;
  color: var(--fc);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 6rem;
  padding: 1rem;

  &:hover {
    background: var(--clr-btn-hov);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 500px;
  padding: 1rem 0;
  width: 100%;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;
  }
`;

const BackIcon = styled(LeftArrowCircle)`
  color: var(--fc);
  cursor: pointer;
  height: 35px;
  margin: 0;
  width: 35px;

  transition: transform 550ms;
  &:hover {
    transform: ${({ isMobile }) => (isMobile ? '' : 'scale(1.15)')};
  }
`;

const NextIcon = styled(RightArrowCircle)`
  color: var(--fc);
  cursor: pointer;
  height: 35px;
  margin: 0;
  width: 35px;

  transition: transform 550ms;
  &:hover {
    transform: ${({ isMobile }) => (isMobile ? '' : 'scale(1.15)')};
  }
`;

const SadIcon = styled(SadCry)`
  color: var(--fc);
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
`;

const SmileIcon = styled(SmileBeam)`
  color: var(--fc);
  cursor: pointer;
  height: 35px;
  margin: 0;
  width: 35px;
`;

const ShockIcon = styled(Shocked2)`
  color: var(--fc);
  cursor: pointer;
  height: 35px;
  margin: 0;
  width: 35px;
`;
