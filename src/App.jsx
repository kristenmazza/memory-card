import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const images = [
    {
      name: 'korean',
      src: '/public/images/card-images/korean.png',
      clicked: false
    },
    {
      name: 'arabic',
      src: '/public/images/card-images/arabic.png',
      clicked: false
    },
    {
      name: 'french',
      src: '/public/images/card-images/french.png',
      clicked: false
    },
    {
      name: 'german',
      src: '/public/images/card-images/german.png',
      clicked: false
    },
    {
      name: 'hindi',
      src: '/public/images/card-images/hindi.png',
      clicked: false
    },
    {
      name: 'italian',
      src: '/public/images/card-images/italian.png',
      clicked: false
    },
    {
      name: 'japanese',
      src: '/public/images/card-images/japanese.png',
      clicked: false
    },
    {
      name: 'mandarin',
      src: '/public/images/card-images/mandarin.png',
      clicked: false
    },
    {
      name: 'portuguese',
      src: '/public/images/card-images/portuguese.png',
      clicked: false
    },
    {
      name: 'russian',
      src: '/public/images/card-images/russian.png',
      clicked: false
    },
    {
      name: 'spanish',
      src: '/public/images/card-images/spanish.png',
      clicked: false
    },
    {
      name: 'turkish',
      src: '/public/images/card-images/turkish.png',
      clicked: false
    },
  ]

  const [imageList, setImageList] = useState(images);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [modalStatus, setModalStatus] = useState("");

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Gameboard
        imageList={imageList}
        setImageList={setImageList}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setModalStatus={setModalStatus}
      />
      <Modal
        modalStatus={modalStatus}
        currentScore={currentScore}
        setModalStatus={setModalStatus}
        setCurrentScore={setCurrentScore}
        setImageList={setImageList}
        images={images}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </>
  );
}

export default App;
