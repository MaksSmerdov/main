import React, {RefObject} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import styles from './Header.module.scss';

interface HeaderLogoProps {
  title: string;
  titleRef: RefObject<HTMLSpanElement | null>;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
                                                 title,
                                                 titleRef,
                                               }) => (
  <div className={styles['header__logo']}>
    <SwitchTransition mode="out-in">
      <CSSTransition key={title} nodeRef={titleRef} timeout={300} classNames="fade">
        <span ref={titleRef} className={styles['header__logo-title']}>{title}</span>
      </CSSTransition>
    </SwitchTransition>
  </div>
);

export default HeaderLogo;