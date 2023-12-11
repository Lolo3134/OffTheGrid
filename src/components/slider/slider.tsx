import React from 'react';

import Slider from 'react-slick';

import chefAlex from '../../assets/image/chefAlex_dev.png';
import chargeMate from '../../assets/image/chargemate_dev.png';
import radiant from '../../assets/image/radiant_dev.webp';
import billboard from '../../assets/image/Billboard.jpg';
import banner from '../../assets/image/Billboard_Banner_.jpg';
import cap from '../../assets/image/Cap.jpg';
import cup from '../../assets/image/cup.jpg';
import hat from '../../assets/image/Hat.jpg';
import hoodie from '../../assets/image/Hoodie-Label.jpg';
import iphone from '../../assets/image/iphone14.jpg';
import tshirt from '../../assets/image/tshirt.jpg';
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
      <img alt="project charge mate" className="slider_card_preview" src={billboard} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card5">
      <img alt="project chaf Alex" className="slider_card_preview" src={banner} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card1">
      <img alt="project charge mate" className="slider_card_preview" src={cup} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card2">
      <img alt="project chaf Alex" className="slider_card_preview" src={cap} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card3">
      <img alt="project charge mate" className="slider_card_preview" src={hat} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card4">
      <img alt="project charge mate" className="slider_card_preview" src={hoodie} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card5">
      <img alt="project chaf Alex" className="slider_card_preview" src={iphone} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card1">
      <img alt="project charge mate" className="slider_card_preview" src={tshirt} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
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
      <img alt="project chaf Alex" className="slider_card_preview" src={radiant} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">Radiant</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card5">
      <img alt="project charge mate" className="slider_card_preview" src={billboard} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card1">
      <img alt="project charge mate" className="slider_card_preview" src={cup} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card2">
      <img alt="project chaf Alex" className="slider_card_preview" src={cap} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card3">
      <img alt="project charge mate" className="slider_card_preview" src={hat} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card4">
      <img alt="project charge mate" className="slider_card_preview" src={hoodie} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
    <div className="slider_card card5">
      <img alt="project chaf Alex" className="slider_card_preview" src={iphone} />
      <div className="slider_card_description">
        <h4 className="slider_card_title">OffTheGrid</h4>
        <p className="slider_card_year">2023</p>
      </div>
    </div>
  </Slider>
);

export default SliderCard;
