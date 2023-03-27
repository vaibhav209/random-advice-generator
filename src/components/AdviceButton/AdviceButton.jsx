import React from 'react';
import styles from './AdviceButton.module.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

const AdviceButton = ({ onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <Button
        variant="primary"
        size="md-8"
        style={{ padding: '6px' }}
        onClick={onClick}
      >
        NEXT <FontAwesomeIcon icon={faForward} size="xl" />
      </Button>
    </div>
  );
};

export default AdviceButton;
