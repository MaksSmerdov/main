import React from "react";
import {Dayjs} from "dayjs";
import CustomDatePicker from "../../ui/CustomDatePicker/CustomDatePicker.tsx";
import styles from "./SidebarContent.module.scss";
import {GraphConfig} from "../../types/sideBar";
import {buildUrl} from "../../utils/utils";

interface Props {
  date: Dayjs | null;
  onDateChange: (d: Dayjs | null) => void;
  configs: GraphConfig[];
  onLinkClick?: (url: string) => void;
}

const DatePickerSection: React.FC<Props> = ({
                                              date,
                                              onDateChange,
                                              configs,
                                              onLinkClick,
                                            }) => {
  return (
    <div className={styles["sidebar-content__object"]}>
      <h3 className={styles["sidebar-content__object-title"]}>
        Выберите дату
      </h3>
      <CustomDatePicker
        label="Дата"
        value={date}
        onChange={onDateChange}
      />
      <ul className={`${styles["sidebar-content__links"]} list-reset`}>
        {configs.map((conf, i) => {
          const url = buildUrl(date, conf.basePath, conf.suffix);
          return (
            <li key={i} className={styles["sidebar-content__link-item"]}>
              <a
                href={url}
                target="contentFrame"
                className={styles["sidebar-content__link"]}
                onClick={() => onLinkClick?.(url)}
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

export default DatePickerSection;
