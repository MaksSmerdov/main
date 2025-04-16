import React, {useState} from 'react';
import styles from './SidebarContent.module.scss';
import {SideBarContentData} from "../../types/sideBar.ts";

interface SideBarContentProps {
  data: SideBarContentData;
  onLinkClick?: (url: string) => void;
}

const SidebarContent: React.FC<SideBarContentProps> = ({data, onLinkClick}) => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <div className={styles['sidebar-content']}>
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles['sidebar-content__section']}>
          {section.header && (
            <h2 className={styles['sidebar-content__header']}>
              {section.header}
            </h2>
          )}
          {section.objects.map((objectItem, objectIndex) => (
            <div key={objectIndex} className={styles['sidebar-content__object']}>
              {objectItem.title && (
                <h3 className={styles['sidebar-content__object-title']}>
                  {objectItem.title}
                </h3>
              )}
              <ul className={`${styles['sidebar-content__links']} list-reset`}>
                {objectItem.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles['sidebar-content__link-item']}>
                    <a
                      href="#"
                      className={`${styles['sidebar-content__link']} ${activeLink === link.path ? styles['active'] : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(link.path);
                        onLinkClick?.(link.path);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div>АО Сорбент © 2025</div>
    </div>
  );
};

export default SidebarContent;
