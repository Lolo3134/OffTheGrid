import Marquee from 'react-fast-marquee';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

import s from '../styles/dev.module.scss';

import {
  arrowDown, ArrowIcon, AtIcon, FireIcon, FolderIcon, HashtagIcon, HeartIcon, ShareIcon, SortIcon, StackIcon,
} from '../styles/icons';

import chefAlex from '../assets/image/chefAlex_dev.png';
import chargemate from '../assets/image/chargemate_dev.png';
import bright from '../assets/image/bright.png';
import rad from '../assets/image/random.png';

const Dev = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  const cardsWrapper = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useEffect(() => {
    const cards = cardsWrapper.current;
    const currCard1 = card1.current;
    const currCard2 = card2.current;
    const currCard3 = card3.current;
    const currCard4 = card4.current;

    if (cards && currCard1 && currCard2 && currCard3 && currCard4) {
      tl.from(currCard1, {
        x: '120%',
      }).to(currCard1, {
        left: '544',
      });

      tl.from(currCard2, {
        transform: 'transition3D',
      }).to(currCard2, {
        left: '164',
      });

      tl.from(currCard3, {
        left: '-700',
      }).to(currCard3, {
        left: '164',
      });

      tl.from(currCard4, {
        left: '-700',
      }).to(currCard4, {
        left: '164',
      });

      ScrollTrigger.create({
        trigger: cards, // Use title1 as the trigger for the ScrollTrigger
        start: 'top',
        end: 'bottom',
        animation: tl,
        scrub: true,
      });
    }
  }, []);

  return (
    <>
      {window.innerWidth > 767
        ? (
          <Marquee className={s.marquee} speed={150}>
            web/mobile development web/mobile development web/mobile development web/mobile development
          </Marquee>
        )
        : (
          <>
            <Marquee className={s.marquee} speed={150}>
              web/mobile development web/mobile development web/mobile development web/mobile development
            </Marquee>
            <Marquee className={`${s.marquee__bottom} ${s.marquee}`} direction="right" speed={150}>
              web/mobile development web/mobile development web/mobile development web/mobile development
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
                We are leading
                <SortIcon fill="#92D700" />
                company
                <br />
                in web
                <HashtagIcon fill="#703FFF" />
                development, and our technical expertise
                <AtIcon fill="#FF6DB2" />
                is at the core of
                <FolderIcon fill="#FF7A00" />
                our philosophy.
              </h3>
            )
            : (
              <h3 className={s.about_title}>
                We are
                <SortIcon fill="#92D700" />
                leading company in web development, and our
                <HashtagIcon fill="#703FFF" />
                technical expertise is
                <AtIcon fill="#FF6DB2" />
                at the
                <FolderIcon fill="#FF7A00" />
                core of our philosophy.
              </h3>
            )
        }
        <div className={s.about_description}>
          <span>&lt;</span>
          <span>div</span>
          <span>&gt;</span>
          We specialize in using Python for web application and website development,
          enabling us to create high performance and highly automated web solutions.
          <span>&lt;</span>
          <span>&#47;</span>
          <span>div</span>
          <span>&gt;</span>
        </div>
        <div className={s.about_subdescription}>
          <div className={s.about_subdescription__left}>
            <span>&lt;p&gt;</span>
            Our experienced Python developers have deep knowledge of the programming
            language and can build powerful web applications that meet all client needs.
            <span>&lt;&#47;p&gt;</span>
          </div>
          <div className={s.about_subdescription__right}>
            <span>&lt;p&gt;</span>
            We employ modern Python frameworks and libraries to ensure
            flawless website functionality and optimize processes.
            <span>&lt;&#47;p&gt;</span>
          </div>
        </div>
        <div className={s.about_blocks}>
          <span>Usability</span>
          <span>User-friendly</span>
          <span>Development</span>
          <span>Website</span>
          <ArrowIcon fill="#FFFFFF" />
          <span>Web application</span>
          <span>Performance</span>
          <span>Frameworks</span>
          <span>Testing</span>
          <HeartIcon fill="#FF6DB2" />
          <ShareIcon fill="#92D700" />
          <StackIcon fill="#92D700" />
          <span>Creation</span>
          <FireIcon fill="#703FFF" />
        </div>
      </section>
      <section className={s.projects}>
        <div className={s.projects_badge}>
          <span>&lt;div&gt;</span>
          OffTheGrid is not only about writing code but also about creating integrated solutions
          that empower clients to truly stand out in the online world and achieve great success.
          <span>&lt;&#47;div&gt;</span>
        </div>
        <h2 className={s.projects_title}>Our projects</h2>
        <div ref={cardsWrapper} className={s.projects_cards}>
          <div ref={card1} className={`${s.card} ${s.card1}`}>
            <img
              alt="card preview chef Alex"
              className={s.card_img}
              src={chefAlex}
            />
            <div className={s.card_description}>
              <h4 className={s.card_title}>Chef Alex</h4>
              <span className={s.card_date}>2023</span>
            </div>
          </div>
          <div ref={card2} className={`${s.card} ${s.card2}`}>
            <img
              alt="card preview chargemate"
              className={s.card_img}
              src={chargemate}
            />
            <div className={s.card_description}>
              <h4 className={s.card_title}>Charge mate</h4>
              <span className={s.card_date}>2023</span>
            </div>
          </div>
          <div ref={card3} className={`${s.card} ${s.card3}`}>
            <img
              alt="card preview bright"
              className={s.card_img}
              src={bright}
            />
            <div className={s.card_description}>
              <h4 className={s.card_title}>Chef Alex</h4>
              <span className={s.card_date}>2023</span>
            </div>
          </div>
          <div ref={card4} className={`${s.card} ${s.card4}`}>
            <img
              alt="card preview random"
              className={s.card_img}
              src={rad}
            />
            <div className={s.card_description}>
              <h4 className={s.card_title}>Charge mate</h4>
              <span className={s.card_date}>2023</span>
            </div>
          </div>
        </div>
      </section>
      <section className={s.process}>
        <div className={s.process__container}>
          <h2 className={s.process_title}>Know more about the process</h2>
        </div>
        <div className={s.process_blocks}>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/01</span>
              <h4 className={s.block_title}>Purpose and Audience</h4>
            </div>
            <p className={s.block_description}>Define your website&apos;s goal and target audience.</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/02</span>
              <h4 className={s.block_title}>Responsive Design</h4>
            </div>
            <p className={s.block_description}>Make the site adaptable to various devices</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/03</span>
              <h4 className={s.block_title}>Usability</h4>
            </div>
            <p className={s.block_description}>Define your website&apos;s goal and target audience.</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/04</span>
              <h4 className={s.block_title}>Loading Speed</h4>
            </div>
            <p className={s.block_description}>Optimize page load times for a better user experience</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/05</span>
              <h4 className={s.block_title}>Content</h4>
            </div>
            <p className={s.block_description}>Create high-quality, relevant content that engages visitors</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/06</span>
              <h4 className={s.block_title}>SEO</h4>
            </div>
            <p className={s.block_description}>Optimize the site for search engines to improve visibility</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/07</span>
              <h4 className={s.block_title}>Security</h4>
            </div>
            <p className={s.block_description}>Protect the site from threats with SSL and regular updates</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/08</span>
              <h4 className={s.block_title}>Social Media Integration</h4>
            </div>
            <p className={s.block_description}>Allow easy content sharing on social networks</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/09</span>
              <h4 className={s.block_title}>Analytics</h4>
            </div>
            <p className={s.block_description}>Implement analytics to track user behavior</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/10</span>
              <h4 className={s.block_title}>Support and Maintenance</h4>
            </div>
            <p className={s.block_description}>Provide ongoing support and updates</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/11</span>
              <h4 className={s.block_title}>Legal Compliance and Privacy</h4>
            </div>
            <p className={s.block_description}>Ensure adherence to laws and data privacy</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/12</span>
              <h4 className={s.block_title}>Browser and Platform Compatibility</h4>
            </div>
            <p className={s.block_description}>Test across different browsers and OS</p>
          </div>
          <div className={s.block}>
            <div className={s.block__wrapper}>
              <span className={s.block_num}>/13</span>
              <h4 className={s.block_title}>Testing</h4>
            </div>
            <p className={s.block_description}>Thoroughly test the site for errors and issues</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dev;
