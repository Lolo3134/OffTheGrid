import React, {
  FC, useState, ChangeEvent, FormEvent,
} from 'react';
import { Link } from 'react-router-dom';

import s from '../styles/contacts.module.scss';
import { sendMessage } from '../services/api/sendMessage';
import {
  ArrowLeft,
  AtIcon, FolderIcon, HashtagIcon, ShareIcon, SortIcon,
} from '../styles/icons';

const Contacts:FC = () => {
  const [choice, setChoice] = useState('website');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [describe, setDescribe] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const onlyNumbers = inputValue.replace(/[^-+\d]+/g, '');
    setPhone(onlyNumbers);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedMessage = `<b>OffTheGrid: </b>\n
      <b>Name: </b>${name}\n
      <b>Phone: </b>${phone}\n
      <b>Email: </b>${email}\n
      <b>Describe: </b>${describe}\n`;

    sendMessage(formattedMessage).then((res) => {
      if (res.ok) {
        setName('');
        setPhone('');
        setEmail('');
        setDescribe('');
        setIsSubmitted(true);
      }
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.form_user}>
              <h3 className={s.form_title}>Your contacts</h3>
              <div className={s.form_user__top}>
                <input
                  required
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  required
                  placeholder="Phone number"
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <input
                required
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={s.project}>
              <h3 className={s.form_title}>About the project</h3>
              <div className={s.project_сhoice}>
                <div className={s.project_сhoice__wrapper}>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 'website' ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice('website')}
                    >
                      Website
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 'design' ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice('design')}
                    >
                      Design
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 'target' ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice('target')}
                    >
                      Target
                    </button>
                  </div>
                  <div className={s.project_сhoice_item__wrapper}>
                    <button
                      className={`${s.project_сhoice_item} ${choice === 'foto' ? s.choice : ''}`}
                      type="button"
                      onClick={() => setChoice('foto')}
                    >
                      Foto
                    </button>
                  </div>
                </div>
              </div>
              <input
                required
                className={s.project_description}
                placeholder="Describe the task"
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}
              />
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
      {isSubmitted
        && (
          <div className={s.formPopup}>
            <p>Your application has been successfully sent! We will contact you shortly.</p>
          </div>
        )}
    </article>
  );
};

export default Contacts;
