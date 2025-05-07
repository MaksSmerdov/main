import React, {RefObject} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import styles from './Header.module.scss';

interface HeaderLogoProps {
  title: string;
  isLibraryMode: boolean;
  toggleMode: () => void;
  titleRef: RefObject<HTMLSpanElement | null>;
  buttonRef: RefObject<HTMLButtonElement | null>;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
                                                 title,
                                                 isLibraryMode,
                                                 toggleMode,
                                                 titleRef,
                                                 buttonRef,
                                               }) => (
  <div className={styles['header__logo']}>
    <div><img className={`${styles['header__logo']}`} src={'./public/logo.png'} alt={'logo'}/></div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <SwitchTransition mode="out-in">
        <CSSTransition key={title} nodeRef={titleRef} timeout={300} classNames="fade">
          <span ref={titleRef} className={styles['header__logo-title']}>{title}</span>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isLibraryMode ? 'to-site' : 'to-library'}
          nodeRef={buttonRef}
          timeout={300}
          classNames="fade"
        >
          <button
            className={`${styles['header__switch-btn']} btn-reset`}
            onClick={toggleMode}
            ref={buttonRef}
          >
            {isLibraryMode ? 'На тех. сайт' : 'В библиотеку'}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </div>

  </div>
);

export default HeaderLogo;