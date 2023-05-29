import './index.scss';
import InfoBlock from '../InfoBlock';
import MainSlider from '../MainSlider';
import InfoSection from '../InfoSection';
import { nanoid } from 'nanoid';
import first from '../../assets/first.jpg';
import second from '../../assets/second.jpg';
import third from '../../assets/third.jpg';

const Main = ({ data }) => {
  const infoBlocksList = data.infoBlocksList;
  return (
    <main className="main">
      <MainSlider />
      <section id="aboutus" className="info-blocks">
        <h2 className="info-blocks__about-us">{data.aboutUs}</h2>
        <ul className="info-blocks__list">
          {infoBlocksList.map((item, index) => (
            <li className="info-blocks__item" key={nanoid()}>
              <InfoBlock
                image={
                  index === 0
                    ? first
                    : index === 1
                    ? second
                    : index === 2
                    ? third
                    : ''
                }
                data={item}
              />
            </li>
          ))}
        </ul>
      </section>
      <InfoSection data={data} />
      <iframe
        className="main__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.9974348178084!2d20.456291999999998!3d44.821616899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654b090016cd%3A0xebfad462a82aaa0c!2z0KbQsNGA0LAg0KPRgNC-0YjQsCAxOCwg0JHQtdC-0LPRgNCw0LQsINCh0LXRgNCx0LjRjw!5e0!3m2!1sru!2sru!4v1666450225729!5m2!1sru!2sru"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};

export default Main;
