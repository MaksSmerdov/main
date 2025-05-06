import React, {useState} from "react";
import styles from "./SidebarContent.module.scss";
import {SideBarContentData} from "../../types/sideBar";
import {Dayjs} from "dayjs";
import DatePickerSection from "./SidebarDatePicker.tsx";

interface SideBarContentProps {
  data: SideBarContentData;
  onLinkClick?: (url: string) => void;
}

const SidebarContent: React.FC<SideBarContentProps> = ({
                                                         data,
                                                         onLinkClick,
                                                       }) => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [pickerDates, setPickerDates] = useState<
    Record<string, Dayjs | null>
  >(() => {
    const rec: Record<string, Dayjs | null> = {};
    data.sections.forEach((section, si) =>
      section.objects.forEach((obj, oi) => {
        if (obj.datePicker) {
          rec[`${si}-${oi}`] = obj.datePicker.initialDate;
        }
      })
    );
    return rec;
  });

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
              const date = pickerDates[key];
              return (
                <DatePickerSection
                  key={key}
                  date={date}
                  onDateChange={(newDate) =>
                    setPickerDates((prev) => ({...prev, [key]: newDate}))
                  }
                  configs={obj.datePicker.configs}
                  onLinkClick={onLinkClick}
                />
              );
            }

            if (obj.links) {
              return (
                <div key={key} className={styles["sidebar-content__object"]}>
                  {obj.title && (
                    <h3
                      className={styles["sidebar-content__object-title"]}
                    >
                      {obj.title}
                    </h3>
                  )}
                  <ul
                    className={`${styles["sidebar-content__links"]} list-reset`}
                  >
                    {obj.links.map((link, li) => {
                      const href = makeHref(link.path);
                      return (
                        <li
                          key={li}
                          className={styles["sidebar-content__link-item"]}
                        >
                          <a
                            href={href}
                            target="contentFrame"
                            className={`${styles["sidebar-content__link"]} ${
                              activeLink === link.path
                                ? styles["active"]
                                : ""
                            }`}
                            onClick={() => {
                              setActiveLink(link.path);
                              onLinkClick?.(href);
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
      <div>АО Сорбент © 2025</div>
    </div>
  );
};

export default SidebarContent;
