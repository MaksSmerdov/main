import React from 'react';
import styles from './SideBar.module.scss';
import {SideBarContentData} from "../../types/sideBar.ts";

interface SideBarContentProps {
  data: SideBarContentData;
}

const SideBarContent: React.FC<SideBarContentProps> = ({data}) => {
  return (
    <div className={styles['sidebar-content']}>
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles['sidebar-content__section']}>
          <h2 className={styles['sidebar-content__header']}>
            {section.header}
          </h2>

          {section.objects.map((objectItem, objectIndex) => (
            <div key={objectIndex} className={styles['sidebar-content__object']}>
              <h3 className={styles['sidebar-content__object-title']}>
                {objectItem.title}
              </h3>
              <ul className={`${styles['sidebar-content__links']} list-reset`}>
                {objectItem.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles['sidebar-content__link-item']}>
                    <a href={link.path} className={styles['sidebar-content__link']}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div>АО сорбент © 2025</div>
    </div>
  );
};

export default SideBarContent;
