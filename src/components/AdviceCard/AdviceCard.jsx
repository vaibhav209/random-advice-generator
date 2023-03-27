import React, { useState } from 'react';
import { getAdvice } from '../../service/advice';
import AdviceCardInner from '../AdviceCardInner/AdviceCardInner';
import FeedbackToggle from '../FeedbackToggle/FeedbackToggle';
import Footer from '../Footer/Footer';

const AdviceCard = () => {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [WelcmMsg, setWelcmMsg] = useState(true);

  const getData = () => {
    setWelcmMsg(false);
    setIsLoading(true);
    setIsError(false);
    getAdvice()
      .then((data) => {
        setAdvice(data.slip.advice);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <FeedbackToggle />
      <AdviceCardInner
        advice={advice}
        isLoading={isLoading}
        isError={isError}
        WelcmMsg={WelcmMsg}
        getData={getData}
      />
      <Footer />
    </>
  );
};

export default AdviceCard;
