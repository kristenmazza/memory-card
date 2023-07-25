import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

function App() {
  const images = [
    {
      name: 'korean',
      src: '/public/images/card-images/korean.png',
    },
    {
      name: 'arabic',
      src: '/public/images/card-images/arabic.png',
    },
    {
      name: 'french',
      src: '/public/images/card-images/french.png',
    },
    {
      name: 'german',
      src: '/public/images/card-images/german.png',
    },
    {
      name: 'hindi',
      src: '/public/images/card-images/hindi.png',
    },
    {
      name: 'italian',
      src: '/public/images/card-images/italian.png',
    },
    {
      name: 'japanese',
      src: '/public/images/card-images/japanese.png',
    },
    {
      name: 'mandarin',
      src: '/public/images/card-images/mandarin.png',
    },
    {
      name: 'portuguese',
      src: '/public/images/card-images/portuguese.png',
    },
    {
      name: 'russian',
      src: '/public/images/card-images/russian.png',
    },
    {
      name: 'spanish',
      src: '/public/images/card-images/spanish.png',
    },
    {
      name: 'turkish',
      src: '/public/images/card-images/turkish.png',
    },
  ]

  const [imageOrder, setImageOrder] = useState(images);

  return (
    <>
      <Header />
      <Gameboard
        imageOrder={imageOrder}
        setImageOrder={setImageOrder}
      />
      <Footer />
    </>
  );
}

export default App;
