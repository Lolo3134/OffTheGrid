import { Link, useLocation } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { useState } from 'react';

import {
  dribbble, inst, linkedIn, Logo, X,
} from '../../styles/icons';

import s from './footer.module.scss';

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const { pathname } = useLocation();

  return (
    <footer>
      <div className={pathname === '/webDev' ? `${s.contacts} ${s.dev}` : s.contacts}>
        <div className={s.contacts__wrapper}>

          {
            pathname === '/webDev'
              ? (
                <div className={s.badge}>
                  <span>&lt;div&gt;</span>
                  We take every new project as an opportunity
                  <br />
                  to collaborate with our clients and bring
                  their unique vision to life, while still adding our own personal touch as well.
                  <span>&lt;&#47;div&gt;</span>
                </div>
              )
              : (
                <div className={s.badge}>
                  Whether you need a website, design, or a marketing strategy,
                  we&apos;re ready to start working immediately. Your success is our priority.
                </div>
              )
          }

          <h2 className={s.title}>Here and Now</h2>
        </div>
        <Link className={s.link} to="/contacts">Contact us</Link>
        {window.innerWidth > 767
          ? (
            <Marquee className={s.marquee} speed={200}>
              <span className={s.marquee__pink}> Creative Solutions </span>
              /
              <span className={s.marquee__green}> Versatility </span>
              /
              <span className={s.marquee__orange}> Your Growth Partner </span>
              /
              <span className={s.marquee__purple}> Quality and Creativity </span>
              /
              <span>Here and Now </span>
              /
            </Marquee>
          ) : (
            <>
              <Marquee className={s.marquee} speed={150}>
                <span className={s.marquee__pink}> Creative Solutions </span>
                /
                <span className={s.marquee__green}> Versatility </span>
                /
                <span className={s.marquee__orange}> Your Growth Partner </span>
                /
                <span className={s.marquee__purple}> Quality and Creativity </span>
                /
                <span> Here and Now </span>
                /
              </Marquee>
              <Marquee className={s.marquee} direction="right" speed={150}>
                <span className={s.marquee__pink}> Creative Solutions </span>
                /
                <span className={s.marquee__green}> Versatility </span>
                /
                <span className={s.marquee__orange}> Your Growth Partner </span>
                /
                <span className={s.marquee__purple}> Quality and Creativity </span>
                /
                <span> Here and Now </span>
                /
              </Marquee>
            </>
          )}
      </div>
      <div className={s.bottom}>
        <div className={s.left}>
          <img alt="logo" src={Logo} />
          <nav className={s.nav}>
            <Link to="/">About us</Link>
            <Link to="/webDev">Web Developers</Link>
            <Link to="/design">Designed</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
        </div>
        <div className={s.right}>
          <h4>Follow us on our social networks</h4>
          <div className={s.social}>
            <div className={s.links}>
              <div className={s.link__wrapper}>
                <Link target="_blank" to="/dfd"><img alt="go to dribbble" className={s.link} src={dribbble} /></Link>
              </div>
              <div className={s.link__wrapper}>
                <Link target="_blank" to="/dfd"><img alt="go to X" className={s.link} src={X} /></Link>
              </div>
              <div className={s.link__wrapper}>
                <Link target="_blank" to="https://www.instagram.com/offthegrid_lab">
                  <img alt="go to instagram" className={s.link} src={inst} />
                </Link>
              </div>
              <div className={s.link__wrapper}>
                <Link target="_blank" to="/dfd"><img alt="go to linkedIn" className={s.link} src={linkedIn} /></Link>
              </div>
            </div>
            <p>2023 OffTheGrid</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
