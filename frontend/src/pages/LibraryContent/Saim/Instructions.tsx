import React from 'react';
import Button from "../../../ui/CustomButton/CustomButton.tsx";
import styles from './Instructions.module.scss'

export const Instructions: React.FC = () => {
  return (
    <section className={`${styles['instructions']}`}>
      <h3 className={`${styles['instructions__title']}`}>Общие инструкции</h3>
      <ul className={`${styles['instructions__list']} list-reset`}>
        <li className={`${styles['instructions__item']}`}>
          <a className={`${styles['instructions__item-link']}`}>Инструкция №1</a>
          <div className={`${styles['instructions__item-buttons']}`}>
            <Button>Скачать Word</Button>
            <Button>Скачать PDF</Button>
          </div>
        </li>
        <li className={`${styles['instructions__item']}`}>
          <a className={`${styles['instructions__item-link']}`}>Инструкция №2</a>
          <div className={`${styles['instructions__item-buttons']}`}>
            <Button>Скачать Word</Button>
            <Button>Скачать PDF</Button>
          </div>
        </li>
        <li className={`${styles['instructions__item']}`}>
          <a className={`${styles['instructions__item-link']}`}>Инструкция №3</a>
          <div className={`${styles['instructions__item-buttons']}`}>
            <Button>Скачать Word</Button>
            <Button>Скачать PDF</Button>
          </div>
        </li>
      </ul>
    </section>
  )
}
