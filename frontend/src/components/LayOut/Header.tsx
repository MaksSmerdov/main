import React, {useState} from 'react';
import {Tabs, Tab} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import Clock from '../../ui/Clock/Clock';
import Calendar from '../../ui/Calendar/Calendar';
import styles from './Header.module.scss';
import SidebarContent from '../../ui/Sidebar/SidebarContent.tsx';
import {mainTabs} from './config/configTabs';
import {sidebarContentConfig} from './config/sidebarConfig';
import {SideBarContentData} from '../../types/sideBar';

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
  const location = useLocation();
  const navigate = useNavigate();
  const [subValue, setSubValue] = useState<number>(0);
  const [disableSubTabsTransition, setDisableSubTabsTransition] = useState<boolean>(false);

  const activeMainIndex = mainTabs.findIndex((tab) =>
    location.pathname.startsWith(tab.path)
  );

  const handleMainTabClick = (_event: React.SyntheticEvent, newValue: number) => {
    setDisableSubTabsTransition(true);
    clearIframeUrl();
    navigate(mainTabs[newValue].path);
    setSubValue(-1);
    setSideBarOpen(false);
    setTimeout(() => setDisableSubTabsTransition(false), 0);
  };

  const handleSubTabClick = (index: number) => {
    clearIframeUrl();
    setSubValue(index);
    if (activeMainIndex !== -1) {
      const currentMainTab = mainTabs[activeMainIndex];
      const subTabLabel = currentMainTab.subTabs[index];
      const config: SideBarContentData | undefined =
        sidebarContentConfig[currentMainTab.label]?.[subTabLabel];
      if (config) {
        setSideBarContent(
          <SidebarContent data={config} onLinkClick={onSideBarLinkClick}/>
        );
        setSideBarOpen(true);
      } else {
        setSideBarContent(null);
        setSideBarOpen(false);
      }
    }
  };

  const currentMainTab = activeMainIndex !== -1 ? mainTabs[activeMainIndex] : null;

  return (
    <header className={`${styles['header__container']}`}>
      <div className={styles['header__left']}>
        <Tabs
          className={`${styles['custom__tabs']}`}
          value={activeMainIndex === -1 ? false : activeMainIndex}
          onChange={handleMainTabClick}
        >
          {mainTabs.map((tab, index) => (
            <Tab className={`${styles['custom__tab']}`} key={index} label={tab.label}/>
          ))}
        </Tabs>
        {currentMainTab && (
          <ul className={`${styles['header__subtabs']} list-reset`}>
            {currentMainTab.subTabs.map((subTab, index) => (
              <li
                key={index}
                onClick={() => handleSubTabClick(index)}
                className={`
          ${styles['header__subtabs-link']} 
          ${disableSubTabsTransition ? styles['no-transition'] : ''} 
          ${subValue === index ? styles['active'] : ''}
        `}
              >
                {subTab}
              </li>
            ))}
          </ul>
        )}

      </div>
      <div className={styles['header__right']}>
        <Clock/>
        <Calendar/>
      </div>
    </header>
  );
};

export default Header;
