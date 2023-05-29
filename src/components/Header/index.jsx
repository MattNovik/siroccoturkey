import './index.scss';
import HeaderSwitcher from '../HeaderSwitcher';
import Menu from '../Menu';
import logo from '../../assets/logosecond.png';
import { ReactComponent as BurgerMenu } from '../../assets/burger.svg';
import { useState } from 'react';

const Header = ({ langType, handleLangChanger, data }) => {
  const [menuOpener, setMenuOpener] = useState(false);

  const handleMenuOpener = () => {
    setMenuOpener(false);
    document.querySelector('html').classList.remove('hidden');
  };

  return (
    <header className="header">
      <HeaderSwitcher
        langType={langType}
        handleLangChanger={handleLangChanger}
      />
      <div className="header__wrapper">
        <a href="/" className="header__logo-wrapper">
          <img src={logo} alt="logo" className="header__logo" />
        </a>
        <Menu
          data={data.menu}
          menuOpener={menuOpener}
          handleMenuOpener={handleMenuOpener}
        />
        <BurgerMenu
          className="header__mob-menu"
          onClick={() => {
            setMenuOpener(true);
            document.querySelector('html').classList.add('hidden');
          }}
        />
      </div>
    </header>
  );
};

export default Header;
