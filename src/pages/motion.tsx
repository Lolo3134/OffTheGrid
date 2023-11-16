import Marquee from 'react-fast-marquee';

import { Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

import s from '../styles/motion.module.scss';
import { arrowDown } from '../styles/icons';

import slide1 from '../assets/video/slide1.mp4';
import slide2 from '../assets/video/slide2.mp4';
import slide3 from '../assets/video/slide3.mp4';
import projects1 from '../assets/video/projects1.mp4';
import projects2 from '../assets/video/project2.mp4';
import projects3 from '../assets/video/project3.mp4';
import projects4 from '../assets/video/project4.mp4';
import projects5 from '../assets/video/projects5.mp4';

import preSlide1 from '../assets/image/slide1.png';
import preSlide2 from '../assets/image/slide2.png';
import preSlide3 from '../assets/image/slide3.png';
import preProject1 from '../assets/image/project1.png';
import preProject2 from '../assets/image/project2.png';
import preProject3 from '../assets/image/project3.png';
import preProject4 from '../assets/image/project4.png';
import preProject5 from '../assets/image/project5.png';

const Motion = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const motionVideo = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    const title1 = titleRef.current;
    const title2 = titleRef2.current;

    if (title1 && title2) {
      tl.from(title1, {
        x: '120%',
      }).to(title1, {
        left: '544',
      });

      tl.from(title2, {
        left: '-700',
      }).to(title2, {
        left: '164',
      });

      ScrollTrigger.create({
        trigger: [title1, title2], // Use title1 as the trigger for the ScrollTrigger
        start: 'bottom right',
        end: 'center',
        animation: tl,
        scrub: true,
        once: true,
      });
    }
    // if (title2 && title) {
    //
    //
    //   ScrollTrigger.create({
    //     trigger: title, // Use title1 as the trigger for the ScrollTrigger
    //     start: 'bottom left',
    //     end: 'center',
    //     animation: tl,
    //     scrub: true,
    //   });
    // }
  }, []);

  // useEffect(() => {
  //   const video = motionVideo.current;
  //
  //   if (video) {
  //     tl.from(video, {
  //       position: 'relative',
  //       top: '0',
  //       left: '0',
  //       width: '655px',
  //       height: '402px',
  //     })
  //       .to(video, {
  //         top: '402px',
  //         position: 'absolute',
  //       }, '10%')
  //       .to(video, {
  //         width: '100%',
  //         height: '811px',
  //       }, '20%');
  //
  //     ScrollTrigger.create({
  //       trigger: video,
  //       start: 'top 20%',
  //       end: 'top 200%',
  //       animation: tl,
  //       scrub: true,
  //     });
  //   }
  // }, []);

  return (
    <>
      {window.innerWidth > 767
        ? (
          <Marquee className={s.marquee} speed={150}>
            motion design / 3D video / motion design / 3D video /
          </Marquee>
        )
        : (
          <>
            <Marquee className={s.marquee} speed={150}>
              motion design / 3D video / motion design / 3D video /
            </Marquee>
            <Marquee className={`${s.marquee__bottom} ${s.marquee}`} direction="right" speed={150}>
              motion design / 3D video / motion design / 3D video /
            </Marquee>
          </>
        )}
      <section className={s.preview}>
        <div className={s.preview__top}>
          <img alt="arrow down" src={arrowDown} />
          <div className={s.preview_badge}>scroll down</div>
          <img alt="arrow down" src={arrowDown} />
        </div>
        <div className={s.preview__wrapper}>
          {window.innerWidth > 767
            ? (
              <video
                autoPlay
                loop
                muted
                controls={false}
                height="100%"
                src={slide1}
                width="100%"
              />
            )
            : (
              <video
                controls
                loop
                muted
                height="100%"
                poster={preSlide1}
                src={slide1}
                width="100%"
              />
            )}
        </div>
      </section>
      <section className={s.motion}>
        {window.innerWidth > 767
          ? (
            <>
              <h2 ref={titleRef} className={s.motion_title}>Motion</h2>
              <h2 ref={titleRef2} className={s.motion_title}>design</h2>
            </>
          )
          : (
            <h2 className={s.motion_title}>Motion design</h2>
          )}
        <div className={s.motion_content}>
          <div ref={motionVideo} className={s.motion__wrapper}>
            {window.innerWidth > 767
              ? (
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  height="100%"
                  src={slide2}
                  width="100%"
                />
              )
              : (
                <video
                  controls
                  loop
                  muted
                  height="100%"
                  poster={preSlide2}
                  src={slide2}
                  width="100%"
                />
              )}
          </div>
          <div className={s.motion_container}>
            <p className={s.motion_description}>
              Unique animations and moving images for advertising, product visualization, and animated logos
            </p>
            <Link className={s.motion_link} to="/">Let&apos;s work</Link>
          </div>
        </div>
      </section>
      <section className={s.d3video}>
        <h2 className={s.d3video_title}>3D Video</h2>
        <div className={s.d3video_content}>
          <div className={s.d3video_container}>
            <p className={s.d3video_description}>
              Developing impressive 3D visualizations for architectural projects,
              the gaming industry, and virtual reality.
            </p>
            <Link className={s.d3video_link} to="/">Let&apos;s work</Link>
          </div>
          <div className={s.d3video__wrapper}>
            {window.innerWidth > 767
              ? (
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  height="100%"
                  src={slide3}
                  width="100%"
                />
              )
              : (
                <video
                  controls
                  loop
                  muted
                  height="100%"
                  poster={preSlide3}
                  src={slide3}
                  width="100%"
                />
              )}
          </div>
        </div>
      </section>
      <section className={s.projects}>
        <h2 className={s.projects_title}>
          Our projects
          <span>/ 9</span>
        </h2>
        <div className={s.line1}>
          <div className={s.video}>
            <div className={s.video1__wrapper}>
              {window.innerWidth > 767
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    height="100%"
                    src={projects1}
                    width="100%"
                  />
                )
                : (
                  <video
                    controls
                    loop
                    muted
                    height="100%"
                    poster={preProject1}
                    src={projects1}
                    width="100%"
                  />
                )}
            </div>
            <div className={s.video_description}>
              <h4 className={s.video_title}>Charge mate</h4>
              <p className={`${s.video_date} ${s.green}`}>2023</p>
            </div>
          </div>
          <div className={s.video}>
            <div className={s.video2__wrapper}>
              {window.innerWidth > 767
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    height="100%"
                    src={projects2}
                    width="100%"
                  />
                )
                : (
                  <video
                    controls
                    loop
                    muted
                    height="100%"
                    poster={preProject2}
                    src={projects2}
                    width="100%"
                  />
                )}
            </div>
            <div className={s.video_description}>
              <h4 className={s.video_title}>Charge mate</h4>
              <p className={`${s.video_date} ${s.pink}`}>2023</p>
            </div>
          </div>
        </div>
        <div className={s.line2}>
          <div className={s.video}>
            <div className={s.video3__wrapper}>
              {window.innerWidth > 767
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    height="100%"
                    src={projects3}
                    width="100%"
                  />
                )
                : (
                  <video
                    controls
                    loop
                    muted
                    height="100%"
                    poster={preProject3}
                    src={projects3}
                    width="100%"
                  />
                )}
            </div>
            <div className={s.video_description}>
              <h4 className={s.video_title}>Charge mate</h4>
              <p className={`${s.video_date} ${s.purple}`}>2023</p>
            </div>
          </div>
        </div>
        <div className={s.line3}>
          <div className={s.video}>
            <div className={s.video4__wrapper}>
              {window.innerWidth > 767
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    height="100%"
                    src={projects4}
                    width="100%"
                  />
                )
                : (
                  <video
                    controls
                    loop
                    muted
                    height="100%"
                    poster={preProject4}
                    src={projects4}
                    width="100%"
                  />
                )}
            </div>
            <div className={s.video_description}>
              <h4 className={s.video_title}>Charge mate</h4>
              <p className={`${s.video_date} ${s.green}`}>2023</p>
            </div>
          </div>
          <div className={s.video}>
            <div className={s.video5__wrapper}>
              {window.innerWidth > 767
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    height="100%"
                    src={projects5}
                    width="100%"
                  />
                )
                : (
                  <video
                    controls
                    loop
                    muted
                    height="100%"
                    poster={preProject5}
                    src={projects5}
                    width="100%"
                  />
                )}
            </div>
            <div className={s.video_description}>
              <h4 className={s.video_title}>Charge mate</h4>
              <p className={`${s.video_date} ${s.orange}`}>2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Motion;
