import { Link } from 'react-router-dom';

import logo from '../../assets/icon/Logo.svg';

import s from './header.module.scss';

export const Header = () => (
  <header className={s.wrapper}>
    <div>
      <Link to="/home"><img alt="Logo" src={logo} /></Link>
    </div>
    <nav className={s.nav}>
      <Link className={s.portfolio} to="/portfolio">
        Portfolio
        <span className={s.portfolio_quantity}>27+</span>
      </Link>
      <div className={s.pages}>
        <Link to="/about">About us</Link>
        <Link to="/developers">Web Developers</Link>
        <Link to="/designed">Designed</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <div className={s.request}>
        <button type="button">Get a request</button>
        <button type="button">Request a quote</button>
      </div>
    </nav>
  </header>
);
