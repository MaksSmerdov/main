import React from "react";
import {Dayjs} from "dayjs";
import CustomDatePicker from "../../ui/CustomDatePicker/CustomDatePicker";
import styles from "./SidebarContent.module.scss";
import {GraphConfig} from "../../types/sideBar";
import {buildUrl} from "../../utils/utils";

interface Props {
  sectionKey: string;
  date: Dayjs | null;
  onDateChange: (d: Dayjs | null) => void;
  configs: GraphConfig[];
  activeLinkId: string;
  onActiveLinkChange: (linkId: string) => void;
  onLinkClick?: (url: string) => void;
}

const SidebarDatePicker: React.FC<Props> = ({
                                              sectionKey,
                                              date,
                                              onDateChange,
                                              configs,
                                              activeLinkId,
                                              onActiveLinkChange,
                                              onLinkClick,
                                            }) => {
  return (
    <div className={styles["sidebar-content__object"]}>
      <div className={styles["sidebar-content__datepicker"]}>
        <CustomDatePicker
          label="Выберите дату"
          value={date}
          onChange={onDateChange}
        />
      </div>
      <ul className={`${styles["sidebar-content__links"]} list-reset`}>
        {configs.map((conf, i) => {
          const url = buildUrl(date, conf.basePath, conf.suffix, conf.monthly);
          const linkId = `${sectionKey}-${i}`;
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
  );
};

export default SidebarDatePicker;
