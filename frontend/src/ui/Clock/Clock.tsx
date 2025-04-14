import React, {useEffect, useState} from 'react';
import styles from './Clock.module.scss';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = hours * 30 + minutes * 0.5;

  return (
    <div className={`${styles['clock']}`}>
      <div className={`${styles['clock__numbers']}`}>
        {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
          <span key={index} style={{'--i': index} as React.CSSProperties}>
            <b>{num}</b>
          </span>
        ))}
        <div
          className={`${styles['clock__circle']} ${styles['clock__circle--hour']}`}
          style={{transform: `rotate(${hourDegrees}deg)`}}
        >
          <i></i>
        </div>
        <div
          className={`${styles['clock__circle']} ${styles['clock__circle--minute']}`}
          style={{transform: `rotate(${minuteDegrees}deg)`}}
        >
          <i></i>
        </div>
        <div
          className={`${styles['clock__circle']} ${styles['clock__circle--second']}`}
          style={{transform: `rotate(${secondDegrees}deg)`}}
        >
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Clock;
