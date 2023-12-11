import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import './sliderPixel.scss';
import './swiper.css';
import 'swiper/css/navigation';

import gif1 from '../../assets/image/pixel1.gif';
import gif2 from '../../assets/image/pixel2.gif';
import gif3 from '../../assets/image/pixel3.gif';
import gif4 from '../../assets/image/pixel4.gif';
import gif5 from '../../assets/image/pixel5.gif';
import gif6 from '../../assets/image/pixel6.gif';

import { SamplePrevArrow } from './SamplePrevArrow';
import { SampleNextArrow } from './SampleNextArrow';

export const SliderPixel = () => (
  <Swiper
    centeredSlides
    loop
    modules={[Autoplay, Navigation]}
    slidesPerView={3}
    spaceBetween={90}
    autoplay={{
      delay: 3000,
      disableOnInteraction: true,
    }}
    navigation={{
      prevEl: '.prev-button',
      nextEl: '.next-button',
    }}
  >
    <SwiperSlide><img alt="decorative" className="slide" src={gif1} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif2} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif3} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif4} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif5} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif6} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif1} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif2} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif3} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif4} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif5} /></SwiperSlide>
    <SwiperSlide><img alt="decorative" className="slide" src={gif6} /></SwiperSlide>
    <div className="prev-button">
      <SamplePrevArrow />
    </div>
    <div className="next-button">
      <SampleNextArrow />
    </div>
  </Swiper>
);
