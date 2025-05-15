// SidebarDatePicker.tsx
import React from "react";
import {Dayjs} from "dayjs";
import CustomDatePicker from "../Ui/CustomDatePicker/CustomDatePicker";
import styles from "./SidebarContent.module.scss";
import {DatePickerGroup} from "../../types/sideBar";
import {buildUrl} from "../../utils/utils";

interface Props {
  sectionKey: string;
  date: Dayjs | null;
  onDateChange: (d: Dayjs | null) => void;
  groups: DatePickerGroup[];
  activeLinkId: string;
  onActiveLinkChange: (linkId: string) => void;
  onLinkClick?: (url: string) => void;
}

const SidebarDatePicker: React.FC<Props> = ({
                                              sectionKey,
                                              date,
                                              onDateChange,
                                              groups,
                                              activeLinkId,
                                              onActiveLinkChange,
                                              onLinkClick,
                                            }) => (
  <div className={styles["sidebar-content__object"]}>
    <div className={styles["sidebar-content__datepicker"]}>
      <CustomDatePicker
        label="Выберите дату"
        value={date}
        onChange={onDateChange}
      />
    </div>

    {groups.map((group, gi) => (
      <div key={gi} className={styles["sidebar-content__group"]}>
        {group.title && (
          <h3 className={styles["sidebar-content__object-title"]}>
            {group.title}
          </h3>
        )}
        <ul className={`${styles["sidebar-content__links"]} list-reset`}>
          {group.configs.map((conf, i) => {
            const url = buildUrl(date, conf.basePath, conf.suffix, conf.monthly, conf.electric);
            const linkId = `${sectionKey}-${gi}-${i}`;
            const isActive = linkId === activeLinkId;

            return (
              <li key={i} className={styles["sidebar-content__link-item"]}>
                <a
                  href={url}
                  target="contentFrame"
                  className={
                    `${styles["sidebar-content__link"]} ` +
                    (isActive ? styles["active"] : "")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick?.(url);
                    onActiveLinkChange(linkId);
                  }}
                >
                  {conf.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    ))}
  </div>
);

export default SidebarDatePicker;
