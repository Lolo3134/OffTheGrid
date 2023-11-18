import React from 'react';
import Marquee from 'react-fast-marquee';

import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import s from '../styles/design.module.scss';
import {
  AnchorIcon,
  arrowDown, Brush2Icon, BrushIcon, ClickIcon, FigmaIcon,
  HeartIcon, ImageIcon, PenIcon,
} from '../styles/icons';

import SliderCard from '../components/slider/slider';

const Design = () => {
  const [item1, inViewItem1] = useInView();
  const [item2, inViewItem2] = useInView();
  const [item3, inViewItem3] = useInView();
  const [item4, inViewItem4] = useInView();
  const [item5, inViewItem5] = useInView();

  return (
    <>
      {window.innerWidth > 767
        ? (
          <Marquee className={s.marquee} speed={350}>
            UX/UI design / UX/UI design /
          </Marquee>
        )
        : (
          <>
            <Marquee className={s.marquee} speed={150}>
              UX/UI design / UX/UI design /
            </Marquee>
            <Marquee className={`${s.marquee__bottom} ${s.marquee}`} direction="right" speed={150}>
              UX/UI design / UX/UI design /
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
                Our design
                <PenIcon />
                expertise extends
                <AnchorIcon />
                beyond the
                <BrushIcon />
                digital realm
              </h3>
            )
            : (
              <h3 className={s.about_title}>
                Our design
                <PenIcon />
                expertise
                <AnchorIcon />
                extends beyond the digital realm
                <BrushIcon />
              </h3>
            )
        }
        <div className={s.about_blocks}>
          <ClickIcon />
          <span>Digital design</span>
          <HeartIcon fill="#FF6DB2" />
          <span>Brand design</span>
          <span>Graphic design</span>
          <span>Social media design</span>
          <FigmaIcon />
          <ImageIcon />
          <Brush2Icon />
          <span>UX/UI design</span>
        </div>
      </section>
      <section className={s.description}>
        <h2 className={s.description_title}>
          We&apos;re here to bring your brand to life with our exceptional design services
        </h2>
        <p className={s.description_text}>
          Our
          <span>talented team</span>
          is dedicated to crafting visual elements that make
          <span>your brand</span>
          stand out and leave a lasting
          <span>impression</span>
          .
        </p>
        <div className={s.description_subText}>
          <p>
            Whether you need a memorable logo that encapsulates
            your company&apos;s essence or eye-catching creative posts
            for your social media, we&apos;re your creative partners.
          </p>
          <Link className={s.link} to="/contacts">Let&apos;s work together</Link>
        </div>
        {window.innerWidth > 767 && <SliderCard />}
      </section>
      <section className={s.services}>
        <h2 className={s.services_title}>
          From identities
          <br />
          to full-scale applications
        </h2>
        <div className={s.services_items}>
          <div ref={item1} className={`${s.item} ${s.item1} ${inViewItem1 && s.item1__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <h3 className={s.item_title}>UX/UI design</h3>
            <p className={s.item_description}>
              We don&apos;t take the easy way out.
              We explore, experiment, and craft unique solutions that set your brand apart from the crowd.
            </p>
          </div>
          <div ref={item2} className={`${s.item} ${s.item2} ${inViewItem2 && s.item2__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <h3 className={s.item_title}>Graphic design</h3>
            <p className={s.item_description}>
              We don&apos;t take the easy way out.
              We explore, experiment, and craft unique solutions that set your brand apart from the crowd.
            </p>
          </div>
          <div ref={item3} className={`${s.item} ${s.item3} ${inViewItem3 && s.item3__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <h3 className={s.item_title}>Brand design</h3>
            <p className={s.item_description}>
              We don&apos;t take the easy way out.
              We explore, experiment, and craft unique solutions that set your brand apart from the crowd.
            </p>
          </div>
          <div ref={item4} className={`${s.item} ${s.item4} ${inViewItem4 && s.item4__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <h3 className={s.item_title}>Digital design</h3>
            <p className={s.item_description}>
              We don&apos;t take the easy way out.
              We explore, experiment, and craft unique solutions that set your brand apart from the crowd.
            </p>
          </div>
          <div ref={item5} className={`${s.item} ${s.item5} ${inViewItem5 && s.item5__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <h3 className={s.item_title}>Digital design</h3>
            <p className={s.item_description}>
              We don&apos;t take the easy way out.
              We explore, experiment, and craft unique solutions that set your brand apart from the crowd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
