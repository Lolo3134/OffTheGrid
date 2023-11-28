import { Fade } from 'react-awesome-reveal';

import { useState, useEffect, useRef } from 'react';

import { useInView } from 'react-intersection-observer';

import { Link } from 'react-router-dom';

import s from '../styles/home.module.scss';

import {
  Arrow, At, Fire, Folder, Hashtag, Heart, Pixel, Share, Sort, Triangle,
} from '../styles/icons';

import team1 from '../assets/image/team1.png';
import team2 from '../assets/image/team2.png';
import team3 from '../assets/image/tems3.png';
import team4 from '../assets/image/team4.png';
import team5 from '../assets/image/team5.png';
import chargemate from '../assets/image/chargemate.png';
import page from '../assets/image/page.webp';
import radiant from '../assets/image/radiant.webp';
import chefAlex from '../assets/image/chefAlex.png';
import screens from '../assets/image/screens.webp';
import website from '../assets/image/website.webp';
import sticker from '../assets/image/sticker.webp';
import bag from '../assets/image/bag.webp';
import modernn from '../assets/image/modernn.webp';

export const Home = () => {
  const [aboutRef, inViewAbout] = useInView();
  const [card1, inViewCard1] = useInView();
  const [card2, inViewCard2] = useInView();
  const [card3, inViewCard3] = useInView();
  const [card4, inViewCard4] = useInView();
  const [card5, inViewCard5] = useInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (blockRef.current && containerRef.current) {
        const blockRect = blockRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        if (blockRect.bottom >= containerRect.bottom) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className={s.wrapper}>
        <div className={s.contents}>
          <h1 className={s.title}>
            <Fade cascade damping={1e-1}>
              OffTheGrid
            </Fade>
          </h1>
          <div className={s.subtitle}>
            Laboratory
            <span> of Promotion</span>
          </div>
        </div>
        <div className={s.services}>
          <Link className={`${s.services_dev} ${s.services_item}`} to="/webDev">
            <h3 className={s.h3}>Web development</h3>
            <div className={s.services_item__wrapper}>
              <div className={s.service_description}>
                <div className={s.h3Subtitle}>
                  (click on me)
                </div>
                <div className={s.page}>/01</div>
              </div>
              <div className={s.dev_bg__wrapper}>
                <div className={`${s.dev_bg} ${s.dev_bg1}`} />
                <div className={`${s.dev_bg} ${s.dev_bg2}`} />
                <div className={`${s.dev_bg} ${s.dev_bg3}`} />
                <div className={`${s.dev_bg} ${s.dev_bg4}`} />
                <div className={`${s.dev_bg} ${s.dev_bg5}`} />
                <div className={`${s.dev_bg} ${s.dev_bg6}`} />
                <div className={`${s.dev_bg} ${s.dev_bg7}`} />
                <div className={`${s.dev_bg} ${s.dev_bg8}`} />
                <div className={`${s.dev_bg} ${s.dev_bg9}`} />
                <div className={`${s.dev_bg} ${s.dev_bg10}`} />
                <div className={`${s.dev_bg} ${s.dev_bg11}`} />
                <div className={`${s.dev_bg} ${s.dev_bg12}`} />
                <div className={`${s.dev_bg} ${s.dev_bg13}`} />
                <div className={`${s.dev_bg} ${s.dev_bg14}`} />
                <div className={`${s.dev_bg} ${s.dev_bg15}`} />
                <div className={`${s.dev_bg} ${s.dev_bg16}`} />
                <div className={`${s.dev_bg} ${s.dev_bg17}`} />
                <div className={`${s.dev_bg} ${s.dev_bg18}`} />
              </div>
            </div>
          </Link>
          <Link className={`${s.services_design} ${s.services_item}`} to="/design">
            <h3 className={s.h3}>UX/UI design</h3>
            <div className={s.services_item__wrapper}>
              <div className={s.service_description}>
                <div className={s.h3Subtitle}>
                  (click on me)
                </div>
                <div className={s.page}>/02</div>
              </div>
              <div className={s.design_bg__wrapper}>
                <div className={s.design_bg}>
                  <div className={s.design_bg1__wrapper}>
                    <div className={s.design_bg1} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg2__wrapper}>
                    <div className={s.design_bg2} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg3__wrapper}>
                    <div className={s.design_bg3} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg4__wrapper}>
                    <div className={s.design_bg4} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg5__wrapper}>
                    <div className={s.design_bg5} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg6__wrapper}>
                    <div className={s.design_bg6} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg7} />
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg8__wrapper}>
                    <div className={s.design_bg8} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg9__wrapper}>
                    <div className={s.design_bg9} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg10} />
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg11__wrapper}>
                    <div className={s.design_bg11} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg12__wrapper}>
                    <div className={s.design_bg12} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg13} />
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg14__wrapper}>
                    <div className={s.design_bg14} />
                  </div>
                </div>
                <div className={s.design_bg}>
                  <div className={s.design_bg15__wrapper}>
                    <div className={s.design_bg15} />
                    <div className={s.design_bg15__inner} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link className={`${s.services_motion} ${s.services_item}`} to="/motion">
            <h3 className={s.h3}>3D, motion design</h3>
            <div className={s.services_item__wrapper}>
              <div className={s.service_description}>
                <div className={s.h3Subtitle}>
                  (click on me)
                </div>
                <div className={s.page}>/03</div>
              </div>
              <div className={s.motion_bg__wrapper}>
                <div className={s.motion_bg1}>
                  <div className={s.motion_bg2} />
                </div>
              </div>
            </div>
          </Link>
          <Link className={`${s.services_target} ${s.services_item}`} to="/target">
            <h3 className={s.h3}>Advertising target</h3>
            <div className={s.services_item__wrapper}>
              <div className={s.service_description}>
                <div className={s.h3Subtitle}>
                  (click on me)
                </div>
                <div className={s.page}>/04</div>
              </div>
              <div className={s.target_bg__wrapper}>
                <div className={`${s.target_bg} ${s.target_bg1}`}>
                  <div className={s.target_bg1_inner} />
                </div>
                <div className={`${s.target_bg} ${s.target_bg2}`}>
                  <div className={s.target_bg2_inner} />
                </div>
                <div className={`${s.target_bg} ${s.target_bg3}`}>
                  <div className={s.target_bg3_inner} />
                </div>
                <div className={`${s.target_bg} ${s.target_bg4}`}>
                  <div className={s.target_bg4_inner} />
                </div>
              </div>
            </div>
          </Link>
          {window.innerWidth > 767 ? (
            <>
              <Link className={`${s.services_foto} ${s.services_item}`} to="/video_foto">
                <div className={s.services_itemMini__wrapper}>
                  <h3 className={s.h3}>Video,photo</h3>
                  <div className={s.h3Subtitle}>(click on me)</div>
                </div>
                <div className={s.services_itemMini__bottom}>
                  <div className={s.page}>/05</div>
                  <div className={s.foto_bg__wrapper}>
                    <div className={s.foto_bg1} />
                    <div className={s.foto_bg2} />
                    <div className={s.foto_bg3} />
                    <Triangle className={s.foto_bg4} />
                  </div>
                </div>
              </Link>
              <Link className={`${s.services_pixelArt} ${s.services_item}`} to="/pixelArt">
                <div className={s.services_itemMini__wrapper}>
                  <h3 className={s.h3}>2D Pixel Art</h3>
                  <div className={s.h3Subtitle}>(click on me)</div>
                </div>
                <div className={s.services_itemMini__bottom}>
                  <div className={s.page}>/06</div>
                  <div className={s.pixel_bg__wrapper}>
                    <Pixel className={s.pixel_bg} />
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <div className={s.fotoArt}>
              <Link className={`${s.services_foto} ${s.services_item}`} to="video_foto">
                <div className={s.services_itemMini__wrapper}>
                  <h3 className={s.h3}>Video,photo</h3>
                  <div className={s.h3Subtitle}>(click on me)</div>
                </div>
                <div className={s.page}>/05</div>
                <div className={s.foto_bg__wrapper}>
                  <div className={s.foto_bg1} />
                  <div className={s.foto_bg2} />
                  <div className={s.foto_bg3} />
                  <Triangle className={s.foto_bg4} />
                </div>
              </Link>
              <Link className={`${s.services_pixelArt} ${s.services_item}`} to="pixelArt">
                <div className={s.services_itemMini__wrapper}>
                  <h3 className={s.h3}>2D Pixel Art</h3>
                  <div className={s.h3Subtitle}>(click on me)</div>
                </div>
                <div className={s.page}>/06</div>
                <div className={s.pixel_bg__wrapper}>
                  <Pixel className={s.pixel_bg} />
                </div>
              </Link>
            </div>
          )}

        </div>
      </section>
      <section ref={aboutRef} className={s.about}>
        {window.innerWidth > 767
          ? (
            <h2 className={s.about_title}>
              <span className={s.about_description__green}>Your</span>
              <img alt="icon Fire" src={Fire} />
              <span>studio for comprehensive</span>
              <img alt="icon Arrow" src={Arrow} />
              <span className={s.about_description__orange}>business</span>
              <br />
              <span>promotion in the world</span>
              <br />
              <span>{'of '}</span>
              <span className={s.about_description__pink}>digital</span>
              <img alt="icon Heart" src={Heart} />
              <span>possibilities!</span>
            </h2>
          ) : (
            <h2 className={s.about_title}>
              <span className={s.about_description__green}>Your</span>
              <img alt="icon Fire" src={Fire} />
              <span>studio for</span>
              <br />
              <span>comprehensive</span>
              <br />
              <span className={s.about_description__orange}>business</span>
              <img alt="icon Arrow" src={Arrow} />
              <br />
              <span>promotion in the</span>
              <br />
              <span>world</span>
              <img alt="icon Heart" src={Heart} />
              <span>{'of '}</span>
              <span className={s.about_description__pink}>digital</span>
              <br />
              <span>possibilities!</span>
            </h2>
          )}
        <div className={inViewAbout ? s.about_animation : ''}>
          <img alt="icon Sort" className={s.sort} src={Sort} />
          <img alt="icon Folder" className={s.folder} src={Folder} />
          <div className={`${s.versatility} ${s.text_item}`}>Versatility</div>
          <div className={`${s.partner} ${s.text_item}`}>Your Growth Partner</div>
          <img alt="icon Share" className={s.share} src={Share} />
          <div className={`${s.quality} ${s.text_item}`}>Quality and Creativity</div>
          <div className={`${s.creative} ${s.text_item}`}>Creative Solutions</div>
          <div className={`${s.here}  ${s.text_item}`}>Here and Now</div>
          <img alt="icon At" className={s.at} src={At} />
          <img alt="icon Hashtag" className={s.hashtag} src={Hashtag} />
        </div>
      </section>
      <section className={s.choice}>
        <div className={s.title__wrapper}>
          <h2 className={s.title}>When you choose us, you choose:</h2>
          <div className={s.subtitle}>
            <p>We are a studio that doesn&apos;t just do the job.</p>
            <p>We create art for your business.</p>
          </div>
        </div>
        <div className={s.cards}>
          <div ref={card1} className={`${s.card} ${s.card1} ${inViewCard1 && s.card1__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <div className={s.card__wrapper}>
              <h4 className={s.card_title}>Creative Solutions</h4>
              <p className={s.card_description}>
                We don&apos;t take the easy way out. We explore, experiment, and craft unique solutions that set your
                brand apart from the crowd.
              </p>
            </div>
          </div>
          <div ref={card2} className={`${s.card} ${s.card2} ${inViewCard2 && s.card2__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <div className={s.card__wrapper}>
              <h4 className={s.card_title}>Versatility</h4>
              <p className={s.card_description}>
                From web development to 3D design and marketing, we&apos;ve brought together the best talents in various
                fields to provide you with a complete range of services.
              </p>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div ref={card3} className={`${s.card} ${s.card3} ${inViewCard3 && s.card3__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <div className={s.card__wrapper}>
              <h4 className={s.card_title}>Your Growth Partner</h4>
              <p className={s.card_description}>
                We&apos;re not just service providers. We&apos;re your partners in achieving success. Together, we grow
                and evolve.
              </p>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div ref={card4} className={`${s.card} ${s.card4} ${inViewCard4 && s.card4__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <div className={s.card__wrapper}>
              <h4 className={s.card_title}>Quality and Creativity</h4>
              <p className={s.card_description}>
                We don&apos;t compromise on quality. Our work is meticulous, and our creative approach gives it
                uniqueness.
              </p>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div ref={card5} className={`${s.card} ${s.card5} ${inViewCard5 && s.card5__bg}`}>
            <button className={s.switch} type="button">
              <div className={s.switch_circle} />
            </button>
            <div className={s.card__wrapper}>
              <h4 className={s.card_title}>Here and Now</h4>
              <p className={s.card_description}>
                Whether you need a website, design, or a marketing strategy, we&apos;re ready to start working
                immediately. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section ref={containerRef} className={s.teams}>
        <div ref={blockRef} className={s.title__wrapper}>
          <div className={s.badge}>Our team</div>
          <h2 className={s.title}>
            Talented web designers, developers, and project managers who work to bring your vision to life.
          </h2>
          {showButton
            && (
              <div className={s.buttonContainer}>
                <button className={s.teams_button} type="button">Get a request</button>
                <div className={s.showButton} />
              </div>
            )}
        </div>
        <div className={s.teams_cards} id="teams">
          <div className={`${s.teams_card} ${s.teams_card1}`} id="card1">
            <img alt="Senior Front-end Developer" className={s.teams_card__photo} src={team1} />
            <div className={s.teams_card__wrapper}>
              <p className={s.teams_card__name}>Maria</p>
              <p className={s.teams_card__description}>UX/UI designer</p>
            </div>
          </div>
          <div className={`${s.teams_card} ${s.teams_card2}`}>
            <img alt="Senior Front-end Developer" className={s.teams_card__photo} src={team2} />
            <div className={s.teams_card__wrapper}>
              <p className={s.teams_card__name}>Serge</p>
              <p className={s.teams_card__description}>Senior Front-end Developer</p>
            </div>
          </div>
          <div className={`${s.teams_card} ${s.teams_card3}`}>
            <img alt="Senior Front-end Developer" className={s.teams_card__photo} src={team3} />
            <div className={s.teams_card__wrapper}>
              <p className={s.teams_card__name}>Nico</p>
              <p className={s.teams_card__description}>Senior Front-end Developer</p>
            </div>
          </div>
          <div className={`${s.teams_card} ${s.teams_card4}`}>
            <img alt="Senior Front-end Developer" className={s.teams_card__photo} src={team4} />
            <div className={s.teams_card__wrapper}>
              <p className={s.teams_card__name}>Emma</p>
              <p className={s.teams_card__description}>Senior Front-end Developer</p>
            </div>
          </div>
          <div className={`${s.teams_card} ${s.teams_card5}`}>
            <img alt="Senior Front-end Developer" className={s.teams_card__photo} src={team5} />
            <div className={s.teams_card__wrapper}>
              <p className={s.teams_card__name}>Danial</p>
              <p className={s.teams_card__description}>Developer, promo admin</p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.projects}>
        <div className={s.title__wrapper}>
          <div className={s.badge}>Our projects</div>
          <h2 className={s.title}>Here are a few examples of our past projects:</h2>
        </div>
        <div className={s.projects_cards}>
          {window.innerWidth > 767
            ? (
              <>
                <div className={s.projects_cards__wrapper}>
                  <Link
                    className={`${s.projects_card} ${s.projects_card1}`}
                    target="_blank"
                    to="https://chargemate.me/"
                  >
                    <img alt="website chargemate" className={s.projects_card__preview} src={chargemate} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Сharge mate</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </Link>
                  <div className={`${s.projects_card} ${s.projects_card5}`}>
                    <img alt="page" className={s.projects_card__preview} src={page} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Our Projects</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </div>
                </div>
                <div className={s.projects_cards__wrapper}>
                  <Link
                    className={`${s.projects_card} ${s.projects_card2}`}
                    target="_blank"
                    to="https://chefalex.co/"
                  >
                    <img alt="website chefAlex" className={s.projects_card__preview} src={chefAlex} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Chef Alex</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </Link>
                  <div className={`${s.projects_card} ${s.projects_card6}`}>
                    <img alt="screens" className={s.projects_card__preview} src={screens} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Our Projects</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </div>
                </div>
                <div className={s.projects_cards__wrapper}>
                  <Link target="_blank" to="/radiant">
                    <div className={`${s.projects_card} ${s.projects_card3}`}>
                      <img alt="website" className={s.projects_card__preview} src={radiant} />
                      <div className={s.projects_card__wrapper}>
                        <h4 className={s.projects_card__title}>Radiant</h4>
                        <p className={s.projects_card__description}>
                          We developed a custom web application for
                          a healthcare provider, streamlining their appointment booking process...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className={`${s.projects_card} ${s.projects_card7}`}>
                    <img alt="sticker" className={s.projects_card__preview} src={sticker} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Our Projects</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </div>
                </div>
                <div className={s.projects_cards__wrapper}>
                  <div className={`${s.projects_card} ${s.projects_card4}`}>
                    <img alt="bag" className={s.projects_card__preview} src={bag} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Our Projects</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </div>
                  <div className={`${s.projects_card} ${s.projects_card8}`}>
                    <img alt="modernn" className={s.projects_card__preview} src={modernn} />
                    <div className={s.projects_card__wrapper}>
                      <h4 className={s.projects_card__title}>Our Projects</h4>
                      <p className={s.projects_card__description}>
                        We developed a custom web application for
                        a healthcare provider, streamlining their appointment booking process...
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`${s.projects_card} ${s.projects_card1}`}>
                  <img alt="website chargemate" className={s.projects_card__preview} src={chargemate} />
                  <div className={s.projects_card__wrapper}>
                    <h4 className={s.projects_card__title}>Сharge mate</h4>
                    <p className={s.projects_card__description}>
                      We developed a custom web application for
                      a healthcare provider, streamlining their appointment booking process...
                    </p>
                  </div>
                </div>
                <div className={`${s.projects_card} ${s.projects_card5}`}>
                  <img alt="page" className={s.projects_card__preview} src={radiant} />
                  <div className={s.projects_card__wrapper}>
                    <h4 className={s.projects_card__title}>Radiant</h4>
                    <p className={s.projects_card__description}>
                      We developed a custom web application for
                      a healthcare provider, streamlining their appointment booking process...
                    </p>
                  </div>
                </div>
                <div className={`${s.projects_card} ${s.projects_card2}`}>
                  <img alt="website chefAlex" className={s.projects_card__preview} src={chefAlex} />
                  <div className={s.projects_card__wrapper}>
                    <h4 className={s.projects_card__title}>Chef Alex</h4>
                    <p className={s.projects_card__description}>
                      We developed a custom web application for
                      a healthcare provider, streamlining their appointment booking process...
                    </p>
                  </div>
                </div>
                <div className={`${s.projects_card} ${s.projects_card6}`}>
                  <img alt="screens" className={s.projects_card__preview} src={screens} />
                  <div className={s.projects_card__wrapper}>
                    <h4 className={s.projects_card__title}>Our Projects</h4>
                    <p className={s.projects_card__description}>
                      We developed a custom web application for
                      a healthcare provider, streamlining their appointment booking process...
                    </p>
                  </div>
                </div>
              </>
            )}
        </div>
      </section>
    </>
  );
};
