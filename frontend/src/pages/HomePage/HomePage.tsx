import React, {useRef, useState} from "react";
import Header from "../../components/LayOut/Header.tsx";
import Sidebar from "../../ui/Sidebar/Sidebar.tsx";
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const contentBodyRef = useRef<HTMLDivElement>(null);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [sideBarContent, setSideBarContent] = useState<React.ReactNode>(null);
  const [iframeUrl, setIframeUrl] = useState<string>('');

  const handleSideBarLinkClick = (url: string) => {
    setIframeUrl(url);
  };

  const clearIframeUrl = () => {
    setIframeUrl('');
  };

  return (
    <div className={`${styles['home']}`}>
      <Header
        setSideBarOpen={setSideBarOpen}
        setSideBarContent={setSideBarContent}
        onSideBarLinkClick={handleSideBarLinkClick}
        clearIframeUrl={clearIframeUrl}
      />
      <div className={`${styles['home__body']}`} ref={contentBodyRef}>
        <Sidebar
          open={sideBarOpen}
          onClose={() => setSideBarOpen(false)}
          content={sideBarContent}
          container={contentBodyRef.current || undefined}
        />
        {iframeUrl && (
          <iframe
            src={iframeUrl}
            className={`${styles['home__iframe']}`}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;