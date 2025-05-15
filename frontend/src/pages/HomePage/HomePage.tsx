import React, {useRef, useState, useCallback} from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Ui/Sidebar/Sidebar";
import SidebarContent from "../../components/SidebarContent/SidebarContent";
import styles from "./HomePage.module.scss";
import {Outlet} from "react-router-dom";
import {SideBarContentData} from "../../types/sideBar";
import {Dayjs} from "dayjs";
import Footer from "../../components/Footer/Footer.tsx";

const HomePage: React.FC = () => {
  const contentBodyRef = useRef<HTMLDivElement>(null);
  const [activeLinkId, setActiveLinkId] = useState<string>("");
  const [pickerDates, setPickerDates] = useState<Record<string, Dayjs | null>>({});
  const [sideBarConfig, setSideBarConfig] = useState<SideBarContentData | null>(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  const handleSideBarLinkClick = useCallback((url: string) => {
    setIframeUrl(url);
  }, []);

  const handleSubTabSelect = useCallback((config: SideBarContentData | null) => {
    if (config) {
      const initialDates: Record<string, Dayjs | null> = {};
      config.sections.forEach((section, si) =>
        section.objects.forEach((obj, oi) => {
          if (obj.datePicker) {
            initialDates[`${si}-${oi}`] = obj.datePicker.initialDate;
          }
        })
      );
      setPickerDates(initialDates);
      setActiveLinkId("");
      setSideBarConfig(config);
      setSideBarOpen(true);
      setIframeUrl("");
    } else {
      setSideBarOpen(false);
      setSideBarConfig(null);
      setIframeUrl("");
    }
  }, []);

  const sidebarContentNode = sideBarConfig && (
    <SidebarContent
      data={sideBarConfig}
      activeLinkId={activeLinkId}
      pickerDates={pickerDates}
      onActiveLinkChange={setActiveLinkId}
      onDateChange={(key, date) =>
        setPickerDates((prev) => ({...prev, [key]: date}))
      }
      onLinkClick={handleSideBarLinkClick}
    />
  );

  return (
    <div className={`${styles['home']}`}>
      <header className={styles['header__container']}>
        <Header
          setSideBarOpen={setSideBarOpen}
          onSubTabSelect={handleSubTabSelect}
          onSideBarLinkClick={handleSideBarLinkClick}
          clearIframeUrl={() => setIframeUrl("")}
        />
      </header>
      <div className={`${styles['home__body']}`} ref={contentBodyRef}>
        <Sidebar
          open={sideBarOpen}
          onClose={() => setSideBarOpen(false)}
          content={sidebarContentNode}
          container={contentBodyRef.current || undefined}
        />
        <iframe
          name="contentFrame"
          src={iframeUrl || undefined}
          title="Frame Content"
          className={`${styles['home__iframe']}`}
        />
        <Outlet/>
      </div>
      <footer className={`${styles['footer__container']}`}>
        <Footer/>
      </footer>
    </div>
  );
};

export default HomePage;
