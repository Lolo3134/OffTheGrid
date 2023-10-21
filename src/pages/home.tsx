import { Link } from 'react-router-dom';

import { AttentionSeeker, Fade } from 'react-awesome-reveal';

import s from '../styles/home.module.scss';

import logoMini from '../assets/icon/logoMini.svg';
import cup from '../assets/image/cup.webp';
import star from '../assets/image/star.webp';
import phone from '../assets/image/phone.webp';
import circle from '../assets/icon/circleArrow.svg';
import arrow from '../assets/icon/arrow.svg';

export const Home = () => (
  <>
    <section className={s.wrapper}>
      <div className={s.contents}>
        <h1 className={s.title}>OffTheGrid</h1>
        <div className={s.subtitle}>Laboratory of Promotion</div>
      </div>
      <div className={s.services}>
        <div className={`${s.services_dev} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>Web development</h2>
            <div className={s.h2Subtitle}>
              Ux/ui design 3D
              <br />
              Motion design
              <br />
              Advertising target
              <br />
              Video, foto
              <br />
              2D Pixel Art
            </div>
          </div>
          <div className={s.page}>/01</div>
        </div>
        <div className={`${s.services_design} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>UX/UI design</h2>
            <div className={s.h2Subtitle}>
              Ux/ui design 3D
              <br />
              Motion design
              <br />
              Advertising target
              <br />
              Video, foto
              <br />
              2D Pixel Art
            </div>
          </div>
          <div className={s.page}>/02</div>
        </div>
        <div className={`${s.services_motion} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>3D, motion design</h2>
            <div className={s.h2Subtitle}>
              Ux/ui design 3D
              <br />
              Motion design
              <br />
              Advertising target
              <br />
              Video, foto
              <br />
              2D Pixel Art
            </div>
          </div>
          <div className={s.page}>/03</div>
        </div>
        <div className={`${s.services_target} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>Advertising target</h2>
            <div className={s.h2Subtitle}>
              Ux/ui design 3D
              <br />
              Motion design
              <br />
              Advertising target
              <br />
              Video, foto
              <br />
              2D Pixel Art
            </div>
          </div>
          <div className={s.page}>/04</div>
        </div>
        <div className={`${s.services_foto} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>Video,photo</h2>
            <div className={s.h2Subtitle}>local Boston</div>
          </div>
          <div className={s.page}>/05</div>
        </div>
        <div className={`${s.services_pixelArt} ${s.services_item}`}>
          <div className={s.services_item__wrapper}>
            <h2 className={s.h2}>2D Pixel Art</h2>
            <div className={s.h2Subtitle}>local Boston</div>
          </div>
          <div className={s.page}>/06</div>
        </div>
      </div>
    </section>
    <section className={s.taglines}>
      <div className={s.taglines_title}>
        <span className={s.emphasis}>your studio</span>
        {' for comprehensive business promotion in the world'}
        <div className={s.link__wrapper}>
          <hr className={s.line} />
          <Link className={s.link} to='/about'>
            about
            <span> our studio</span>
          </Link>
        </div>
        of digital possibilities!
      </div>
      <div className={s.tagline}>
        <div className={s.tagline_description}>
          <div className={s.icons}>
            <img alt='cup' src={cup} />
            <img alt='phone' src={phone} />
            <img alt='star' src={star} />
          </div>
          <div className={s.title}>
            We are
            <img alt='logo' src={logoMini} />
          </div>
          <div className={s.description}>
            a studio that doesn&apos;t just do the job; we create art for your business. When you choose us, you choose:
          </div>
        </div>
        <div className={s.tagline_items}>
          <Fade cascade direction='down' duration={500}>
            <div className={s.tagline_item}>Creative Solutions</div>
            <div className={`${s.tagline_item} ${s.tagline_item__border}`}>Versatility</div>
            <div className={`${s.tagline_item} ${s.tagline_item__border}`}>Your Growth Partner</div>
            <div className={s.tagline_item}>Quality and Creativity</div>
            <div className={`${s.tagline_item} ${s.tagline_item__border}`}>Here and Now</div>
          </Fade>
          <Fade delay={1500} direction='down' duration={500}>
            <Link className={s.tagline_link} to='/'>
              <img alt='circle with arrow' src={circle} />
            </Link>
          </Fade>
        </div>
      </div>
    </section>
    <section className={s.advantages}>
      <div className={`${s.creative} ${s.advantages_item}`}>
        <Fade cascade direction='down' duration={500}>
          <h3 className={s.title}>Creative Solutions</h3>
        </Fade>
        <div className={s.description}>
          We don&apos;t take the easy way out. We explore, experiment, and craft unique solutions that set your brand
          apart from the crowd.
        </div>
      </div>
      <div className={`${s.versatility} ${s.advantages_item}`}>
        <Fade cascade direction='down' duration={500}>
          <h3 className={`${s.title} ${s.title__border}`}>Versatility</h3>
        </Fade>
        <div className={s.description}>
          From web development to 3D design and marketing, we&apos;ve brought together the best talents in various
          fields to provide you with a complete range of services.
        </div>
      </div>
      <div className={`${s.partner} ${s.advantages_item}`}>
        <Fade cascade direction='down' duration={500}>
          <h3 className={s.title}>Your Growth Partner</h3>
        </Fade>
        <div className={s.description}>
          We&apos;re not just service providers. We&apos;re your partners in achieving success. Together, we grow and
          evolve.
        </div>
      </div>
      <div className={`${s.quality} ${s.advantages_item}`}>
        <Fade cascade direction='down' duration={500}>
          <h3 className={`${s.title} ${s.title__border}`}>Quality and Creativity</h3>
        </Fade>
        <div className={s.description}>
          From web development to 3D design and marketing, we&apos;ve brought together the best talents in various
          fields to provide you with a complete range of services.
        </div>
      </div>
    </section>
    <section className={s.contact}>
      <div className={s.conteiner}>
        <div className={s.here}>Here</div>
        <div className={s.now}>and Now</div>
        <div className={s.subtitle_wrapper}>
          <div className={s.subtitle}>
            Whether you need a website, design, or a marketing strategy, we&apos;re ready to start working immediately.
            Your success is our priority.
          </div>
        </div>
      </div>
      <Link className={s.link} to='/contact'>
        <img alt='arrow' src={arrow} />
        <span>contact us</span>
      </Link>
    </section>
  </>
);
