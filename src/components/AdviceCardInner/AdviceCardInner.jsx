import React from 'react';
import Card from 'react-bootstrap/Card';
import AdviceButton from '../AdviceButton/AdviceButton';
import Loader from '../Loader/Loader';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import styles from './AdviceCardInner.module.css';


const AdviceCardInner = ({
  advice,
  isLoading,
  isError,
  WelcmMsg,
  getData,
}) => {


  return (
    <>
      <div className={'d-flex align-items-center justify-content-center'}>
        <div className={styles.subCard}>
          <Card className={'text-center'}>
            <Card.Header
              className={'text-center'}
              style={{ fontSize: '27px', color: '#1E90FF' }}
            >
              Insightful Advisor
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ fontWeight: '500' }}>

                {isLoading && <Loader />}

                {isError && (
                  <h2 className={'text-danger'}>
                    Error: Please try after sometime
                  </h2>
                )}

                {WelcmMsg && (
                  <h2 className={styles.welcmText}>
                    Hello Stranger, Happy Reading!!
                  </h2>
                )}

                <p
                  className={
                    isError ? `${styles.noneStyle}` : `${styles.blockStyle}`
                  }
                >
                  {!isLoading && `${advice}`}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <AdviceButton onClick={getData} />
    </>
  );
};

export default AdviceCardInner;
