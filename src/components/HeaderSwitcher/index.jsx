import './index.scss';
import { useState } from 'react';

const HeaderSwitcher = ({ langType, handleLangChanger }) => {
  console.log(langType);
  return (
    <div className="header-switcher">
      <div className="header-switcher__wrapper">
        <ul className="header-switcher__list">
          <li className="header-switcher__item">
            <button
              className={
                langType === 'srp'
                  ? 'header-switcher__button active'
                  : 'header-switcher__button'
              }
              type="button"
              value="srp"
              onClick={(e) => handleLangChanger(e.target.value)}
            >
              TUR
            </button>
          </li>
          <li className="header-switcher__item">
            <button
              className={
                langType === 'eng'
                  ? 'header-switcher__button active'
                  : 'header-switcher__button'
              }
              type="button"
              value="eng"
              onClick={(e) => handleLangChanger(e.target.value)}
            >
              ENG
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSwitcher;
