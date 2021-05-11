import styled from 'styled-components';
import { useState } from 'react';
import { LeftArrowCircle } from '@styled-icons/boxicons-solid/LeftArrowCircle';
import { RightArrowCircle } from '@styled-icons/boxicons-solid/RightArrowCircle';
import { Shocked2 } from '@styled-icons/icomoon/Shocked2';
import { SadCry } from '@styled-icons/fa-solid/SadCry';
import { SmileBeam } from '@styled-icons/fa-solid/SmileBeam';

export default function FetchAnswerCards({
  cards,
  setIsLoading,
  load,
  setLoad,
  page,
  setPage,
  setScore,
  score,
  completed,
  setCompleted,
}) {
  const [show, setShow] = useState(false);

  function getBool(val) {
    const num = +val;
    return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0, '');
  }

  let correctChecker;
  const correct = +getBool(cards[page].correctAnswer);

  if (correct === 1 && show) {
    correctChecker = true;
  } else correctChecker = false;

  const handlePrevPage = () => {
    setShow(false);
    if (page >= 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setShow(false);
    console.log(completed);

    if (page === cards.length - 1) {
      setLoad(!load);
      setIsLoading(true);
    }
  };

  const answeredPage = (page + 1).toString();
  const answered = completed.includes(answeredPage);

  const handleButtonClick = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value);
    setCompleted([...completed, answeredPage]);
    answered ? alert('Nice Try') : setScore((prev) => prev + value);
    setShow(!show);
  };

  const ratio = score / completed.length;
  const shockScore = ratio >= 0.35 && ratio <= 0.5;
  const goodScore = ratio > 0.5;

  return (
    <>
      <ButtonWrapper>
        <BackIcon onClick={handlePrevPage} />
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
        <NextIcon onClick={handleNextPage} />
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

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;

  p {
    margin-bottom: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  border: solid white 1px;
`;

const BackIcon = styled(LeftArrowCircle)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
`;

const NextIcon = styled(RightArrowCircle)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
`;

const SadIcon = styled(SadCry)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
`;

const SmileIcon = styled(SmileBeam)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
`;

const ShockIcon = styled(Shocked2)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin: 0;
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
