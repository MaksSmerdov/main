import React, {useRef, useState} from "react";
import Header from "../../components/LayOut/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";
import styles from "./HomePage.module.scss";
import {Outlet} from "react-router-dom";

const HomePage: React.FC = () => {
  const contentBodyRef = useRef<HTMLDivElement>(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sideBarContent, setSideBarContent] = useState<React.ReactNode>(null);
  const [iframeUrl, setIframeUrl] = useState("");

  const handleSideBarLinkClick = (url: string) => {
    setIframeUrl(url);
  };

  return (
    <div className={styles.home}>
      <Header
        setSideBarOpen={setSideBarOpen}
        setSideBarContent={setSideBarContent}
        onSideBarLinkClick={handleSideBarLinkClick}
        clearIframeUrl={() => setIframeUrl("")}
      />
      <div className={styles.home__body} ref={contentBodyRef}>
        <Sidebar
          open={sideBarOpen}
          onClose={() => setSideBarOpen(false)}
          content={sideBarContent}
          container={contentBodyRef.current || undefined}
        />

        <iframe
          name="contentFrame"
          src={iframeUrl || undefined}
          title="Embedded Content"
          className={styles.home__iframe}
        />
        <Outlet/>
      </div>
    </div>
  );
};

export default HomePage;
