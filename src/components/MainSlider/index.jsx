import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Slide1 from '../../assets/slide1.jpg';
import Slide12x from '../../assets/slide1@2x.jpg';
import Slide1webp from '../../assets/slide1.webp';
import Slide12xebp from '../../assets/slide1@2x.webp';
import Slide2 from '../../assets/slide2.jpg';
import Slide22x from '../../assets/slide2@2x.jpg';
import Slide2webp from '../../assets/slide2.webp';
import Slide22xebp from '../../assets/slide2@2x.webp';
import Slide3 from '../../assets/slide3.jpg';
import Slide32x from '../../assets/slide3@2x.jpg';
import Slide3webp from '../../assets/slide3.webp';
import Slide32xebp from '../../assets/slide3@2x.webp';
import Slide4 from '../../assets/slide4.jpg';
import Slide42x from '../../assets/slide4@2x.jpg';
import Slide4webp from '../../assets/slide4.webp';
import Slide42xebp from '../../assets/slide4@2x.webp';

const MainSlider = () => {
  return (
    <section className="main-slider">
      <h1 className="main-slider__text">SIROCCO GLOBAL</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Slide1webp} 1x, ${Slide12xebp} 2x`}
            />
            <img
              src={Slide2}
              srcSet={`${Slide1} 1x, ${Slide12x} 2x`}
              width="1280"
              height="480"
              alt="slide1"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Slide3webp} 1x, ${Slide32xebp} 2x`}
            />
            <img
              src={Slide2}
              srcSet={`${Slide3} 1x, ${Slide32x} 2x`}
              width="1280"
              height="480"
              alt="slide1"
            />
          </picture>
        </SwiperSlide>
        {/*         <SwiperSlide>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Slide4webp} 1x, ${Slide42xebp} 2x`}
            />
            <img
              src={Slide2}
              srcSet={`${Slide4} 1x, ${Slide42x} 2x`}
              width="1280"
              height="480"
              alt="slide1"
            />
          </picture>
        </SwiperSlide> */}
        <SwiperSlide>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Slide2webp} 1x, ${Slide22xebp} 2x`}
            />
            <img
              src={Slide2}
              srcSet={`${Slide2} 1x, ${Slide22x} 2x`}
              width="1280"
              height="480"
              alt="slide1"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSlider;
