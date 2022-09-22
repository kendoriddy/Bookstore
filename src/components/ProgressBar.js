import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 30;
const ProgressBar = () => (
  <div style={{ width: 120, height: 120, marginRight: '20px' }}>
    <CircularProgressbar
      value={percentage}
      styles={buildStyles({
        strokeLinecap: 'butt',
      })}
      text={`${percentage}%`}
    />

  </div>
);

export { ProgressBar, percentage };
