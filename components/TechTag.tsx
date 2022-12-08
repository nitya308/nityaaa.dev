import React from 'react';
import styles from '../styles/techtag.module.css';

type TechTagProps = {
  techs: string[];
};

function TechTag({ techs }: TechTagProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {techs.map((item) => (
        <img
          className={styles.techImg}
          src={item}
          alt="tag" />
      ))}
    </div>
  );
};

export default TechTag;