import React from 'react';

import Slider from 'react-slick';

import s from '../../styles/design.module.scss';
import chefAlex from '../../assets/image/chefAlex_dev.png';
import chargeMate from '../../assets/image/chargemate_dev.png';
import radiant from '../../assets/image/radiant_dev.webp';
import './slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = () => (
  <Slider
    autoplay
    centerMode
    infinite
    pauseOnHover
    arrows={false}
    autoplaySpeed={2000}
    className="slider"
    slidesToShow={2}
  >
    <div className="slider_card card1">
      <img alt="project chaf Alex" className="slider_card_preview" src={chefAlex} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Chef Alex</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card2">
      <img alt="project charge mate" className="slider_card_preview" src={chargeMate} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Charge mate</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card3">
      <img alt="project chaf Alex" className="slider_card_preview" src={radiant} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Radiant</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card4">
      <img alt="project charge mate" className="slider_card_preview" src={chefAlex} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Chef Alex</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card5">
      <img alt="project chaf Alex" className="slider_card_preview" src={chargeMate} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Charge mate</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card1">
      <img alt="project charge mate" className="slider_card_preview" src={radiant} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Radiant</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card2">
      <img alt="project chaf Alex" className="slider_card_preview" src={chefAlex} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Chef Alex</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card3">
      <img alt="project charge mate" className="slider_card_preview" src={chargeMate} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Charge mate</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card4">
      <img alt="project charge mate" className="slider_card_preview" src={radiant} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Radiant</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
  </Slider>
);

export default SliderCard;
