import React from 'react';
import Marquee from 'react-fast-marquee';

import { Link } from 'react-router-dom';

import s from '../styles/pixelArt.module.scss';
import {
  FolderIcon, ZapIcon, arrowDown, ArrowIcon, Brush2Icon, HeartIcon, ImageIcon, PlayIcon, ClickIcon,
} from '../styles/icons';
import gif1 from '../assets/image/pixel1.gif';
import gif2 from '../assets/image/pixel2.gif';
import gif3 from '../assets/image/pixel3.gif';
import gif4 from '../assets/image/pixel4.gif';
import gif5 from '../assets/image/pixel5.gif';
import gif6 from '../assets/image/pixel6.gif';
import { SliderPixel } from '../components/sliderPixel/sliderPixel';

const PixelArt = () => (
  <>
    {window.innerWidth > 767
      ? (
        <Marquee className={s.marquee} speed={150}>
          2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics
        </Marquee>
      )
      : (
        <>
          <Marquee className={s.marquee} speed={150}>
            2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics
          </Marquee>
          <Marquee className={`${s.marquee__bottom} ${s.marquee}`} direction="right" speed={150}>
            2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics / 2D Videos and Pixel Art Graphics
          </Marquee>
        </>
      )}
    <section className={s.about}>
      <div className={s.about__top}>
        <img alt="arrow down" src={arrowDown} />
        <div className={s.about_badge}>scroll down</div>
        <img alt="arrow down" src={arrowDown} />
      </div>
      {
        window.innerWidth > 767
          ? (
            <h3 className={s.about_title}>
              Explore the
              <FolderIcon fill="#FF7A00" />
              diverse creative possibilities
              <ZapIcon />
              which off
              <ArrowIcon fill="#92D700" />
              the grid
            </h3>
          )
          : (
            <h3 className={s.about_title}>
              Explore
              <FolderIcon fill="#FF7A00" />
              the diverse creative possibilities
              <ZapIcon />
              which off
              <ArrowIcon fill="#92D700" />
              the grid
            </h3>
          )
      }
      <div className={s.about_preview}>
        <img alt="decorative" src={gif1} />
        <img alt="decorative" src={gif2} />
        <img alt="decorative" src={gif3} />
        <img alt="decorative" src={gif4} />
        <img alt="decorative" src={gif5} />
        <img alt="decorative" src={gif6} />
      </div>
      <div className={s.about_description}>
        <div className={s.about_description__left}>
          <p>
            Our studio excel not only in 3D videos but also in captivating 2D animations.
            From dynamic explainer video to engaging promotional content,
            we bring your ideas to life through the power of animation.
          </p>
          <p>
            Additionally, our skilled team is proficient in crafting intricate pixel art graphics,
            adding a unique and nostalgic touch to your visuals.
          </p>
        </div>
        <div className={s.about_description__right}>
          <p>
            At offthegrid,
            {' '}
            <span>possibilities</span>
            {' '}
            are
            {' '}
            <span>limitless</span>
            {' '}
            – let&apos;s turn your concepts into captivating realities!
          </p>
          <Link to="/contacts">Let&apos;s work together</Link>
        </div>
      </div>
      <div className={s.about_blocks}>
        <span>Exclusive</span>
        <span>Trendy</span>
        <Brush2Icon />
        <HeartIcon fill="#FF6DB2" />
        <span>2D animations</span>
        <span>Pixel art</span>
        <span>Animated movie</span>
        <ImageIcon />
        <PlayIcon />
        <span>Dynamic</span>
        <span>Attractive</span>
        <ClickIcon fill="#92D700" />
      </div>
    </section>
    {window.innerWidth > 767 && (
      <section className={s.projects}>
        <h2 className={s.projects_title}>
          Our projects
          <span>/ 9</span>
        </h2>
        <SliderPixel />
      </section>
    )}
  </>
);

export default PixelArt;
