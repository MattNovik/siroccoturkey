import './index.scss';
import { nanoid } from 'nanoid';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const Menu = ({ data, menuOpener, handleMenuOpener }) => {
  return (
    <div
      className={menuOpener ? 'menu open' : 'menu'}
      onClick={() => handleMenuOpener()}
    >
      <button className="menu__close-button">
        <CloseIcon className="menu__close" />
      </button>
      <ul className="menu__list">
        {data.map((item) => (
          <li className="menu__item" key={nanoid()}>
            <a
              href={item.link}
              className="menu__link"
              onClick={() => handleMenuOpener()}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
