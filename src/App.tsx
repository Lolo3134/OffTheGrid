import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import s from './styles/App.module.scss';
import { Header } from './components/header/header';
import { Home } from './pages/home';
import { Footer } from './components/footer/footer';

const Dev = lazy(() => import(/* webpackChunkName: "Dev" */ './pages/dev'));
// const Motion = lazy(() => import(/* webpackChunkName: "Motion" */ './pages/motion'));

function App() {
  return (
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
          {/* <Route element={<Motion />} path="/motion" /> */}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
