import React from 'react';

import { Link } from 'react-router-dom';

import s from '../styles/notFound.module.scss';
import {
  ArrowIcon, BookmarkIcon, ClickIcon, FireIcon, FolderIcon, HeartIcon,
} from '../styles/icons';

const NotFound = () => (
  <div className={s.wrapper}>
    <div className={s.content}>
      <div className={s.right}>
        <div className={s.right_top}>
          <h2>404 error</h2>
        </div>
        <div className={s.right_description}>
          <p>
            There are no wrong turnings. Only paths we
            had not known we were meant to walk:this page is a good example.
          </p>
        </div>
      </div>
      <div className={s.links}>
        <Link className={s.link_home} to="/">Go Home</Link>
        <p>or</p>
        <div className={s.block_links}>
          <Link to="/webDev">Web development</Link>
          <Link to="/design">UX/UI design</Link>
          <Link to="/motion">3D, motion design</Link>
          <Link to="/target">Advertising target</Link>
          <Link to="/foto_video">Video,foto</Link>
          <Link to="/pixelArt">2D Pixel Art</Link>
          <FolderIcon fill="#FF7A00" />
          <ArrowIcon fill="#92D700" />
          <HeartIcon fill="#FF6DB2" />
          <FireIcon fill="#FF6DB2" />
          <BookmarkIcon />
          <ClickIcon />
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
