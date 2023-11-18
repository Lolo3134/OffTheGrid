import React, { lazy, Suspense, useContext } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import AnimatedCursor from 'react-animated-cursor';

import s from './styles/App.module.scss';
import { Header } from './components/header/header';
import { Home } from './pages/home';
import { Footer } from './components/footer/footer';
import { FooterContext } from './context/footerContext';

const Dev = lazy(() => import(/* webpackChunkName: "Dev" */ './pages/dev'));
const Motion = lazy(() => import(/* webpackChunkName: "Motion" */ './pages/motion'));
const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './pages/contacts'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/notFound'));
const Design = lazy(() => import(/* webpackChunkName: "Design" */ './pages/design'));

function App() {
  const { pathname } = useLocation();
  const footerContext = useContext(FooterContext);

  return (
    <>
      <AnimatedCursor
        color="112, 63, 255"
        innerScale={2}
        innerSize={20}
        outerAlpha={1}
        outerScale={0}
        outerSize={0}
        innerStyle={{
          mixBlendMode: 'difference',
        }}
      />
      <div className={s.app}>
        <Header />
        <Suspense fallback={(
          <div className={s.loader__wrapper}>
            <div className={s.loader} />
          </div>
        )}
        >
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Dev />} path="/webDev" />
            <Route element={<Design />} path="/design" />
            <Route element={<Motion />} path="/motion" />
            <Route element={<Contacts />} path="/contacts" />
            <Route element={<NotFound />} path="/*" />
          </Routes>
        </Suspense>
        {pathname !== '/contacts' && <Footer />}
      </div>
    </>
  );
}

export default App;
