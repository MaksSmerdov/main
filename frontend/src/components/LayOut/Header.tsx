import React, {useState} from "react";
import {Tabs, Tab} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import Clock from "../../ui/Clock/Clock";
import Calendar from "../../ui/Calendar/Calendar";
import styles from "./Header.module.scss";
import Button from "../../ui/CustomButton/CustomButton";
import SideBar from "../../ui/SideBar/SideBar";
import SideBarContent from "../../ui/SideBar/SideBarContent.tsx";
import {mainTabs} from "./config/configTabs.ts";
import {sidebarContentConfig} from "./config/sidebarConfig.ts";
import {SideBarContentData} from "../../types/sideBar.ts";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [subValue, setSubValue] = useState<number>(0);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [sideBarContent, setSideBarContent] = useState<React.ReactNode>(null);
  const activeMainIndex = mainTabs.findIndex((tab) =>
    location.pathname.startsWith(tab.path)
  );

  const handleMainTabClick = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    navigate(mainTabs[newValue].path);
    setSubValue(0);
    setSideBarOpen(false);
  };

  const handleSubTabClick = (index: number) => {
    setSubValue(index);
    if (activeMainIndex !== -1) {
      const currentMainTab = mainTabs[activeMainIndex];
      const subTabLabel = currentMainTab.subTabs[index];

      // Получаем типизированный конфиг для выбранной сабвкладки
      const config: SideBarContentData | undefined =
        sidebarContentConfig[currentMainTab.label]?.[subTabLabel];

      if (config) {
        setSideBarContent(<SideBarContent data={config}/>);
        setSideBarOpen(true);
      } else {
        setSideBarContent(null);
        setSideBarOpen(false);
      }
    }
  };

  const currentMainTab = activeMainIndex !== -1 ? mainTabs[activeMainIndex] : null;

  return (
    <>
      <header className={`${styles["header__container"]} container`}>
        <div className={styles["header__left"]}>
          <Tabs
            value={activeMainIndex === -1 ? false : activeMainIndex}
            onChange={handleMainTabClick}
          >
            {mainTabs.map((tab, index) => (
              <Tab key={index} label={tab.label}/>
            ))}
          </Tabs>

          {currentMainTab && (
            <div className={styles["header__subtabs"]}>
              {currentMainTab.subTabs.map((subTab, index) => (
                <Button
                  key={index}
                  onClick={() => handleSubTabClick(index)}
                  className={subValue === index ? styles["active"] : ""}
                >
                  {subTab}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className={styles["header__right"]}>
          <Clock/>
          <Calendar/>
        </div>
      </header>
      <SideBar
        open={sideBarOpen}
        onClose={() => setSideBarOpen(false)}
        content={sideBarContent}
      />
    </>
  );
};

export default Header;
