import React from "react";
import styles from "./SidebarContent.module.scss";
import {SideBarContentData} from "../../types/sideBar";
import {Dayjs} from "dayjs";
import SidebarDatePicker from "./SidebarDatePicker";

interface SidebarContentProps {
  data: SideBarContentData;
  activeLinkId: string;
  pickerDates: Record<string, Dayjs | null>;
  onActiveLinkChange: (linkId: string) => void;
  onDateChange: (key: string, date: Dayjs | null) => void;
  onLinkClick?: (url: string) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
                                                         data,
                                                         activeLinkId,
                                                         pickerDates,
                                                         onActiveLinkChange,
                                                         onDateChange,
                                                         onLinkClick,
                                                       }) => {
  const makeHref = (path: string) =>
    path.match(/^https?:\/\//)
      ? path
      : `${window.location.origin}/#${path}`;

  return (
    <div className={styles["sidebar-content"]}>
      {data.sections.map((section, si) => (
        <div key={si} className={styles["sidebar-content__section"]}>
          {section.header && (
            <h2 className={styles["sidebar-content__header"]}>
              {section.header}
            </h2>
          )}

          {section.objects.map((obj, oi) => {
            const key = `${si}-${oi}`;

            if (obj.datePicker) {
              return (
                <SidebarDatePicker
                  key={key}
                  sectionKey={key}
                  date={pickerDates[key]}
                  onDateChange={(newDate) => onDateChange(key, newDate)}
                  configs={obj.datePicker.configs}
                  activeLinkId={activeLinkId}
                  onActiveLinkChange={onActiveLinkChange}
                  onLinkClick={onLinkClick}
                />
              );
            }

            if (obj.links) {
              return (
                <div
                  key={key}
                  className={styles["sidebar-content__object"]}
                >
                  {obj.title && (
                    <h3 className={styles["sidebar-content__object-title"]}>
                      {obj.title}
                    </h3>
                  )}
                  <ul
                    className={`${styles["sidebar-content__links"]} list-reset`}
                  >
                    {obj.links.map((link, li) => {
                      const href = makeHref(link.path);
                      const linkId = `${key}-${li}`;
                      const isActive = linkId === activeLinkId;

                      return (
                        <li
                          key={li}
                          className={styles["sidebar-content__link-item"]}
                        >
                          <a
                            href={href}
                            target="contentFrame"
                            className={
                              `${styles["sidebar-content__link"]} ` +
                              (isActive ? styles["active"] : "")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              onLinkClick?.(href);
                              onActiveLinkChange(linkId);
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }

            return null;
          })}
        </div>
      ))}
      <div className={`${styles['copyright']}`}>АО Сорбент © 2025</div>
    </div>
  );
};

export default SidebarContent
