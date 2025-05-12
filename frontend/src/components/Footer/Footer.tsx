import React, {useState, useRef, useEffect} from "react";
import {QRCodeCanvas} from "qrcode.react";
import {CSSTransition} from "react-transition-group";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const [showQr, setShowQr] = useState(false);
  const telegramRef = useRef<HTMLDivElement>(null);      // для кликов вне
  const tooltipRef = useRef<HTMLDivElement>(null);       // для CSSTransition

  const toggleQr = () => setShowQr(v => !v);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        telegramRef.current &&
        !telegramRef.current.contains(e.target as Node)
      ) {
        setShowQr(false);
      }
    };
    const handleWindowBlur = () => {
      setShowQr(false);
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return (
    <>
      <div className={styles["footer__images"]}>
        <a
          href="https://sorbent.su/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/sorbent.png" alt="sorbent"/>
        </a>
        <a
          href="https://zelinskygroup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/group.png" alt="group"/>
        </a>

        <div
          className={styles["footer__icon-wrapper"]}
          onClick={toggleQr}
          ref={telegramRef}
        >
          <img src="/assets/svg/telegram.svg" alt="telegram"/>

          <CSSTransition
            in={showQr}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={tooltipRef}
          >
            <div
              ref={tooltipRef}
              className={styles["footer__tooltip"]}
            >
              <QRCodeCanvas value="https://t.me/test_techsite_bot"/>
              <a
                className={styles["footer__tooltip--link"]}
                href="https://t.me/test_techsite_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Промышленный<br/>телеграм бот
              </a>
            </div>
          </CSSTransition>
        </div>
      </div>

      <div className={styles["footer__copyright"]}>
        <span className={styles["footer__copyright--text"]}>
          АО Сорбент © 2025.<br/>Все права защищены
        </span>
      </div>
    </>
  );
};

export default Footer;
