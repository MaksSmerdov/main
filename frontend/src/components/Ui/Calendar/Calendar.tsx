import React, {useState, useEffect} from "react";
import styles from "./Calendar.module.scss";
import {FaAngleLeft, FaAngleRight, FaCalendar} from "react-icons/fa";

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const getMonthName = (month: number, year: number): string =>
  new Date(year, month).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isCompact, setIsCompact] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 1370 : false,
  );

  useEffect(() => {
    const onResize = () => setIsCompact(window.innerWidth <= 1370);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
    if (i < startDay || i >= startDay + daysInMonth) {
      cells.push(null);
    } else {
      cells.push(i - startDay + 1);
    }
  }

  const handlePrev = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNext = () => setCurrentDate(new Date(year, month + 1, 1));

  const today = new Date();
  const isToday = (day: number) =>
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day;

  if (isCompact) {
    const compactDate = today.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    return (
      <div className={`${styles["calendar__compact"]}`}>
        <span> <FaCalendar/></span>
        <span style={{width: '100%'}}>{compactDate}</span>
      </div>
    );
  }

  return (
    <div className={`${styles["calendar"]}`}>
      <div className={`${styles["calendar__btns"]}`}>
        <button
          className={`${styles["calendar__btn"]} ${styles["calendar__btn--prev"]} btn-reset`}
          onClick={handlePrev}
        >
          <FaAngleLeft/>
        </button>

        <h2
          className={`${styles["calendar__title-year"]} title-reset`}
        >
          {getMonthName(month, year)}
        </h2>

        <button
          className={`${styles["calendar__btn"]} ${styles["calendar__btn--next"]} btn-reset`}
          onClick={handleNext}
        >
          <FaAngleRight/>
        </button>
      </div>

      <table className={`${styles["calendar__table"]}`}>
        <thead>
        <tr>
          {WEEK_DAYS.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
        </thead>
        <tbody style={{height: "84px"}}>
        {Array.from({length: rows}).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {cells
              .slice(rowIndex * 7, rowIndex * 7 + 7)
              .map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={
                    cell && isToday(cell) ? `${styles["today"]}` : ""
                  }
                >
                  {cell ?? ""}
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
