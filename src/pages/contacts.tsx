import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import s from '../styles/contacts.module.scss';
import {
  ArrowLeft,
  AtIcon, FolderIcon, HashtagIcon, ShareIcon, SortIcon,
} from '../styles/icons';

const Contacts = () => {
  const [choice, setChoice] = useState(1);

  return (
    <article className={s.wrapper}>
      <div className={s.content}>
        {window.innerWidth < 767
          && (
            <Link className={s.link_back} to="/">
              <ArrowLeft />
            </Link>
          )}
        <div className={s.decorative}>
          <h2 className={s.title}>
            Let’s talk about your business needs and how we can help to achieve them
          </h2>
          <div className={s.blocks}>
            <FolderIcon fill="#FF7A00" />
            <span>Creative Solutions</span>
            <SortIcon fill="#703FFF" />
            <span>Versatility</span>
            <span>Quality and Creativity</span>
            <HashtagIcon fill="#FF6DB2" />
            <ShareIcon fill="#92D700" />
            <span>Here and Now</span>
            <AtIcon fill="#FFFFFF" />
            <span>Your Growth Partner</span>
          </div>
        </div>
        <section className={s.form__wrapper}>
          <form className={s.form}>
            <div className={s.form_user}>
              <h3 className={s.form_title}>Your contacts</h3>
              <div className={s.form_user__top}>
                <input placeholder="Name" type="text" />
                <input placeholder="Phone number" type="tel" />
              </div>
              <input placeholder="Email" type="email" />
            </div>
            <div className={s.project}>
              <h3 className={s.form_title}>About the project</h3>
              <div className={s.project_сhoice}>
                <div className={s.project_сhoice__wrapper}>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 1 ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice(1)}
                    >
                      Website
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 2 ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice(2)}
                    >
                      Design
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 3 ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice(3)}
                    >
                      Target
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 4 ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice(4)}
                    >
                      Foto
                    </button>
                  </div>
                </div>
              </div>
              <input className={s.project_description} placeholder="Describe the task" />
            </div>
            <button className={s.send} type="submit">Contact us</button>
          </form>
          {window.innerWidth > 767
            && (
              <Link className={s.link_back} to="/">
                <ArrowLeft />
              </Link>
            )}
        </section>
      </div>
    </article>
  );
};

export default Contacts;
