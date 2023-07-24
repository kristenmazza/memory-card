import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Gameboard />
      <Footer />
    </>
  );
}

export default App;
