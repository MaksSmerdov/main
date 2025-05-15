import React, {useState, useRef} from 'react';
import {Tabs, Tab} from '@mui/material';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import Clock from '../Ui/Clock/Clock';
import Calendar from '../Ui/Calendar/Calendar';
import HeaderLogo from './HeaderLogo';
import styles from './Header.module.scss';
import {mainTabs, libraryTabs} from './config/configTabs';
import {sidebarMainConfig, sidebarLibraryConfig} from '../SidebarContent/content/sidebarConfig.ts';
import {SideBarContentData} from '../../types/sideBar';
import {FaArchive} from "react-icons/fa";
import {FiMonitor} from "react-icons/fi";

interface HeaderProps {
  setSideBarOpen: (open: boolean) => void;
  onSubTabSelect: (config: SideBarContentData | null) => void;
  onSideBarLinkClick: (url: string) => void;
  clearIframeUrl: () => void;
}

const Header: React.FC<HeaderProps> = ({setSideBarOpen, onSubTabSelect, clearIframeUrl}) => {
  const [isLibraryMode, setIsLibraryMode] = useState(false);
  const [tabs, setTabs] = useState(mainTabs);
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(-1);
  const [disableSubTabsTransition, setDisableSubTabsTransition] = useState(false);
  const [title, setTitle] = useState('Технологический сайт');

  const titleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const subsRef = useRef<HTMLUListElement>(null);

  const currentMainTab = tabs[mainIndex];
  const configMap = isLibraryMode ? sidebarLibraryConfig : sidebarMainConfig;

  const toggleMode = () => {
    clearIframeUrl();
    setSubIndex(-1);
    setMainIndex(0);
    setSideBarOpen(false);
    onSubTabSelect(null);
    setDisableSubTabsTransition(true);

    if (!isLibraryMode) {
      setTabs(libraryTabs);
      setTitle('Технологическая библиотека');
    } else {
      setTabs(mainTabs);
      setTitle('Технологический сайт');
    }
    setIsLibraryMode(!isLibraryMode);
    setTimeout(() => setDisableSubTabsTransition(false), 0);
  };

  const handleMainTabClick = (_: React.SyntheticEvent, newValue: number) => {
    clearIframeUrl();
    setSubIndex(-1);
    setSideBarOpen(false);
    onSubTabSelect(null);
    setDisableSubTabsTransition(true);

    setMainIndex(newValue);
    setTimeout(() => setDisableSubTabsTransition(false), 0);
  };

  const handleSubTabClick = (index: number) => {
    clearIframeUrl();
    setSubIndex(index);
    const subLabel = currentMainTab.subTabs![index];
    const config = configMap[currentMainTab.label]?.[subLabel] || null;

    if (config) {
      onSubTabSelect(config);
      setSideBarOpen(true);
    } else {
      onSubTabSelect(null);
      setSideBarOpen(false);
    }
  };


  return (
    <>
      <div className={styles['header__background']}>
        <div className={styles['header__background-lines']}></div>
      </div>
      <div className={styles['header__left']}>
        <HeaderLogo
          title={title}
          titleRef={titleRef}
        />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isLibraryMode ? 'library' : 'main'}
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
                    <Tab wrapped key={i} label={tab.label}/>
                  ))}
                </Tabs>
                <SwitchTransition mode="out-in">
                  <CSSTransition key={currentMainTab.label} nodeRef={subsRef} timeout={300} classNames="fade">
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
      </div>
      <div className={styles['header__right']}>
        <div className={styles['header__right--switch']}>
          <button
            className={`${styles['header__switch-btn']} btn-reset`}
            onClick={toggleMode}
            ref={buttonRef}
          >
            {isLibraryMode ? <FiMonitor/> : <FaArchive/>}
            {isLibraryMode ? 'Тех. сайт' : 'Библиотека'}
          </button>
        </div>
        <div className={styles['header__right--info']}>
          <Clock/>
          <Calendar/>
        </div>
      </div>
    </>
  );
};

export default Header;
