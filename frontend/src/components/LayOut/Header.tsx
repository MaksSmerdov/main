import React, {useState, useRef} from 'react';
import {Tabs, Tab} from '@mui/material';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import Clock from '../../ui/Clock/Clock';
import Calendar from '../../ui/Calendar/Calendar';
import styles from './Header.module.scss';
import SidebarContent from '../SidebarContent/SidebarContent.tsx';
import {mainTabs, libraryTabs} from './config/configTabs';
import {sidebarMainConfig, sidebarLibraryConfig} from './config/sidebarConfig';

interface HeaderProps {
  setSideBarOpen: (open: boolean) => void;
  setSideBarContent: (content: React.ReactNode) => void;
  onSideBarLinkClick: (url: string) => void;
  clearIframeUrl: () => void;
}

const Header: React.FC<HeaderProps> = ({
                                         setSideBarOpen,
                                         setSideBarContent,
                                         onSideBarLinkClick,
                                         clearIframeUrl
                                       }) => {
  const [tabs, setTabs] = useState(mainTabs);
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(-1);
  const [disableSubTabsTransition, setDisableSubTabsTransition] = useState(false);
  const [title, setTitle] = useState('Технологический сайт');
  const titleRef = useRef<HTMLSpanElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const subsRef = useRef<HTMLUListElement>(null);

  const currentMainTab = tabs[mainIndex];
  const configMap = tabs === mainTabs
    ? sidebarMainConfig
    : sidebarLibraryConfig;

  const handleMainTabClick = (_: React.SyntheticEvent, newValue: number) => {
    const clickedLabel = tabs[newValue].label;
    clearIframeUrl();
    setSubIndex(-1);
    setSideBarOpen(false);
    setDisableSubTabsTransition(true);

    if (clickedLabel === 'Библиотека') {
      setTabs(libraryTabs);
      setMainIndex(0);
      setTitle('Технологическая библиотека');
    } else if (clickedLabel === 'Технологический сайт') {
      setTabs(mainTabs);
      setMainIndex(0);
      setTitle('Технологический сайт');
    } else {
      setMainIndex(newValue);
    }

    setTimeout(() => setDisableSubTabsTransition(false), 0);
  };

  const handleSubTabClick = (index: number) => {
    clearIframeUrl();
    setSubIndex(index);

    const subLabel = currentMainTab.subTabs![index];
    const config = configMap[currentMainTab.label]?.[subLabel];


    if (config) {
      setSideBarContent(
        <SidebarContent data={config} onLinkClick={onSideBarLinkClick}/>
      );
      setSideBarOpen(true);
    } else {
      setSideBarContent(null);
      setSideBarOpen(false);
    }
  };

  return (
    <header className={styles['header__container']}>
      <div className={styles['header__left']}>
        <img className={styles['header__left-img']} src='/logo.png' alt='logo'/>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={title}
            nodeRef={titleRef}
            timeout={300}
            classNames="fade"
          >
            <span ref={titleRef} className={styles['header__left-title']}>
              {title}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={tabs === mainTabs ? 'main' : 'library'}
          nodeRef={centerRef}
          timeout={300}
          classNames="fade"
        >
          <div ref={centerRef} className={styles['header__center']}>
            <nav className={styles['header__center-nav']}>
              <Tabs
                className={styles['custom__tabs']}
                value={mainIndex}
                onChange={handleMainTabClick}
              >
                {tabs.map((tab, i) => (
                  <Tab key={i} label={tab.label}/>
                ))}
              </Tabs>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={currentMainTab.label}
                  nodeRef={subsRef}
                  timeout={300}
                  classNames="fade"
                >
                  {currentMainTab.subTabs ? (
                    <ul ref={subsRef} className={`${styles['header__center-subtabs']} list-reset`}>
                      {currentMainTab.subTabs.map((subTab, i) => (
                        <li
                          key={i}
                          onClick={() => handleSubTabClick(i)}
                          className={`
                            ${styles['header__center-subtabs--link']}
                            ${disableSubTabsTransition ? styles['no-transition'] : ''}
                            ${subIndex === i ? styles['active'] : ''}
                          `}
                        >
                          {subTab}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul ref={subsRef} className={`${styles['header__center-subtabs']} list-reset`}/>
                  )}
                </CSSTransition>
              </SwitchTransition>
            </nav>
          </div>
        </CSSTransition>
      </SwitchTransition>

      <div className={styles['header__right']}>
        <Clock/>
        <Calendar/>
      </div>
    </header>
  );
};

export default Header;
