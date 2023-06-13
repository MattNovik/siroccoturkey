import './index.scss';
import InfoBlock from '../InfoBlock';
import MainSlider from '../MainSlider';
import mainImage from '../../assets/mainImage.jpg';
import InfoSection from '../InfoSection';
import { nanoid } from 'nanoid';
import first from '../../assets/first.jpeg';
import second from '../../assets/second.jpg';
import third from '../../assets/third.jpg';

const Main = ({ data }) => {
  const infoBlocksList = data.infoBlocksList;
  return (
    <main className="main">
      {/*       <MainSlider /> */}
      <img src={mainImage} className="main__img" />
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.720217747805!2d29.0283639!3d40.987606899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8667fd57493%3A0x70fb95d0fb8f4251!2zZDogNSwgQ2FmZXJhxJ9hLCBHZW4uIEFzxLFtIEfDvG5kw7x6IENkLiBubzogNjIsIDM0NzEwIEthZMSxa8O2eS_EsHN0YW5idWwsINCi0YPRgNGG0LjRjw!5e0!3m2!1sru!2sru!4v1686638972286!5m2!1sru!2sru"
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
