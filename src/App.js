import React from 'react';

import './App.css';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import Main from './layout/Main';


// const Main = lazy(
//   () => import('./layout/Main')
// );



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
