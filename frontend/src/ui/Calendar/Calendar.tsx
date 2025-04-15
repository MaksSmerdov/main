import React, {useState} from 'react';
import styles from './Calendar.module.scss';

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const getMonthName = (month: number, year: number): string => {
  return new Date(year, month).toLocaleDateString("ru-RU", {month: "long", year: "numeric"});
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  let startDay = firstDayOfMonth.getDay();
  if (startDay === 0) startDay = 7;
  startDay = startDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const totalCells = startDay + daysInMonth;
  const rows = Math.ceil(totalCells / 7);
  const cells: (number | null)[] = [];

  for (let i = 0; i < rows * 7; i++) {
    if (i < startDay || i >= (startDay + daysInMonth)) {
      cells.push(null);
    } else {
      cells.push(i - startDay + 1);
    }
  }

  const handlePrev = (): void => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNext = (): void => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  const isToday = (day: number): boolean => {
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  return (
    <div className={`${styles['calendar']}`} id="calendar">
      <div className={`${styles['calendar__btns']}`} id="month">
        <button
          className={`${styles['calendar__btn']} ${styles['calendar__btn--prev']} btn-reset`}
          id="prev"
          onClick={handlePrev}
        >
          <svg viewBox="0 0 22 38" fill="none" aria-hidden="true">
            <path
              d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346018 18.1184 0.346018 17.1421 1.32233L1.23223 17.2322ZM7 16.5L3 16.5L3 21.5L7 21.5L7 16.5Z"
            ></path>
          </svg>
        </button>
        <h2 className={`${styles['calendar__title-year']} title-reset`} id="monthYear">
          {getMonthName(month, year)}
        </h2>
        <button
          className={`${styles['calendar__btn']} ${styles['calendar__btn--next']} btn-reset`}
          id="next"
          onClick={handleNext}
        >
          <svg viewBox="0 0 22 38" fill="none" aria-hidden="true">
            <path
              d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346018 18.1184 0.346018 17.1421 1.32233L1.23223 17.2322ZM7 16.5L3 16.5L3 21.5L7 21.5L7 16.5Z"
            ></path>
          </svg>
        </button>
      </div>
      <table className={`${styles['calendar__table']}`} id="calendarTable">
        <thead>
        <tr>
          {WEEK_DAYS.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
        </thead>
        <tbody id="calendarBody" style={{height: "84px"}}>
        {Array.from({length: rows}).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {cells.slice(rowIndex * 7, rowIndex * 7 + 7).map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cell && isToday(cell) ? `${styles['today']}` : ''}
              >
                {cell ? cell : ''}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
