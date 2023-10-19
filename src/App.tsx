import React from 'react';

import s from './styles/App.module.scss';
import { Header } from './components/header/header';
import { Home } from './pages/home';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
