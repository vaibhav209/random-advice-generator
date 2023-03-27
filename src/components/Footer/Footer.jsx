import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <div className={styles.footerStyle}>
          Coded by{' '}
          <a
            href="https://github.com/vaibhav209"
            target="_blank"
            title="Github profile"
            style={{ color: 'white' }}
          >
            Vaibhav Jumde
          </a>
        </div>
  );
};

export default Footer;
