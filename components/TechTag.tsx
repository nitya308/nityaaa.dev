import React from 'react';
import styles from '../styles/techtag.module.css';

type TechTagProps = {
  techs: string[];
};

function TechTag({techs}: TechTagProps) {
  return (
    <div style={{ display: 'flex' }}>
      {techs.map((item) => (
      <img
        style={{ flex: 1, width: '100px' }}
        src={item}
        alt="tag" />
    ))}
    </div>
  );
};

export default TechTag;