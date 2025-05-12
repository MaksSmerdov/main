import React, {useEffect, useRef} from 'react';
import styles from './Clock.module.scss';
import {FaClock} from "react-icons/fa";

const Clock: React.FC = () => {
  // Рэфы на стрелки
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const s = now.getSeconds();
      const m = now.getMinutes();
      const h = now.getHours() % 12;

      const secondDegrees = s * 6;
      const minuteDegrees = m * 6 + s * 0.1;
      const hourDegrees = h * 30 + m * 0.5;

      if (secondRef.current) secondRef.current.style.transform = `rotate(${secondDegrees}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minuteDegrees}deg)`;
      if (hourRef.current) hourRef.current.style.transform = `rotate(${hourDegrees}deg)`;

      if (digitalRef.current) {
        digitalRef.current.textContent = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      }
    };

    update(); // сразу отрисовать текущее время
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className={styles.analog}>
        <div className={styles.clock}>
          <div className={styles.clock__numbers}>
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => (
              <span key={i} style={{'--i': i} as React.CSSProperties}>
                <b>{num}</b>
              </span>
            ))}
            {/* вместо state-управления, привязываем ref к каждому кругу */}
            <div
              ref={hourRef}
              className={`${styles.clock__circle} ${styles['clock__circle--hour']}`}
            ><i/></div>
            <div
              ref={minuteRef}
              className={`${styles.clock__circle} ${styles['clock__circle--minute']}`}
            ><i/></div>
            <div
              ref={secondRef}
              className={`${styles.clock__circle} ${styles['clock__circle--second']}`}
            ><i/></div>
          </div>
        </div>
      </div>

      <div className={styles.digital}>
        <span><FaClock/></span>
        {/* цифровой вывод — тоже через ref */}
        <span ref={digitalRef} style={{width: '100%'}}/>
      </div>
    </>
  );
};

export default Clock;
