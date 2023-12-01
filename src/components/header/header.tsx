import { Link } from 'react-router-dom';

import { useState } from 'react';

import logo from '../../assets/icon/Logo.svg';

import {
  dribbble, inst, linkedIn, X,
} from '../../styles/icons';

import s from './header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.wrapper}>
      <div>
        <Link to="/" onClick={() => setIsOpen(false)}><img alt="Logo" className={s.logo} src={logo} /></Link>
      </div>
      {window.innerWidth > 767
        ? (
          <nav className={s.nav}>
            <Link className={s.portfolio} to="/portfolio">
              Portfolio
              <span className={s.portfolio_quantity}>27+</span>
            </Link>
            <div className={s.pages}>
              <Link to="/">About us</Link>
              <Link to="/webDev">Web Developers</Link>
              <div className={s.designed}>
                <button type="button">Designed</button>
                <div className={s.designed__wrapper}>
                  <div className={s.designed_block}>
                    <Link to="/design">UX/UI design</Link>
                    <Link to="/2d_3d">2D</Link>
                    <Link to="/motion">Motion design</Link>
                    <Link to="/graphic">Graphic design</Link>
                  </div>
                </div>
              </div>
              <Link to="/contacts">Contacts</Link>
            </div>
            <div className={s.request}>
              <button type="button">Get a request</button>
              <button type="button">Request a quote</button>
            </div>
          </nav>
        )
        : (
          <>
            <button className={`${s.burger} ${isOpen ? s.open : ''} `} type="button" onClick={() => setIsOpen(!isOpen)}>
              <div className={`${s.line} ${s.line1} ${isOpen ? s.active : ''} `} />
              <div className={`${s.line} ${s.line2} ${isOpen ? s.active : ''} `} />
            </button>
            {isOpen
              && (
                <div className={`${s.menu} ${isOpen ? s.open : ''} `}>
                  <nav>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      About us /
                      <span className={s.link_page__orange}>01</span>
                    </Link>
                    <Link to="/webDev" onClick={() => setIsOpen(false)}>
                      Web Developers /
                      <span className={s.link_page__green}>02</span>
                    </Link>
                    <Link to="/design" onClick={() => setIsOpen(false)}>
                      UX/UI design /
                      <span className={s.link_page__pink}>03</span>
                    </Link>
                    <Link to="/motion" onClick={() => setIsOpen(false)}>
                      3D, motion design /
                      <span className={s.link_page__purple}>04</span>
                    </Link>
                    <Link to="/target" onClick={() => setIsOpen(false)}>
                      Advertising target /
                      <span className={s.link_page__orange}>05</span>
                    </Link>
                    <Link to="/video_foto" onClick={() => setIsOpen(false)}>
                      Video,foto /
                      <span className={s.link_page__green}>06</span>
                    </Link>
                    <Link to="/pixelArt" onClick={() => setIsOpen(false)}>
                      2D Pixel Art /
                      <span className={s.link_page__pink}>07</span>
                    </Link>
                    <Link to="/contacts" onClick={() => setIsOpen(false)}>
                      Contacts /
                      <span className={s.link_page__purple}>08</span>
                    </Link>
                  </nav>
                  <Link className={s.contact} to="/contacts" onClick={() => setIsOpen(false)}>Contact us</Link>
                  <div className={s.right}>
                    <h3>Follow us on our social networks</h3>
                    <div className={s.social}>
                      <div className={s.links}>
                        <Link target="_blank" to="/dfd" onClick={() => setIsOpen(false)}>
                          <img alt="go to dribbble" className={s.link} src={dribbble} />
                        </Link>
                        <Link target="_blank" to="/dfd" onClick={() => setIsOpen(false)}>
                          <img alt="go to X" className={s.link} src={X} />
                        </Link>
                        <Link
                          target="_blank"
                          to="https://www.instagram.com/offthegrid_lab"
                          onClick={() => setIsOpen(false)}
                        >
                          <img alt="go to instagram" className={s.link} src={inst} />
                        </Link>
                        <Link target="_blank" to="/dfd" onClick={() => setIsOpen(false)}>
                          <img alt="go to linkedIn" className={s.link} src={linkedIn} />
                        </Link>
                      </div>
                      <p>2023 OffTheGrid</p>
                    </div>
                  </div>
                </div>
              )}
          </>
        )}
    </header>
  );
};
