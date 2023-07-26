import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard, { shuffle } from './components/Gameboard';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const images = [
    {
      name: 'korean',
      src: '/src/images/card-images/korean.png',
      clicked: false
    },
    {
      name: 'arabic',
      src: '/src/images/card-images/arabic.png',
      clicked: false
    },
    {
      name: 'french',
      src: '/src/images/card-images/french.png',
      clicked: false
    },
    {
      name: 'german',
      src: '/src/images/card-images/german.png',
      clicked: false
    },
    {
      name: 'hindi',
      src: '/src/images/card-images/hindi.png',
      clicked: false
    },
    {
      name: 'italian',
      src: '/src/images/card-images/italian.png',
      clicked: false
    },
    {
      name: 'japanese',
      src: '/src/images/card-images/japanese.png',
      clicked: false
    },
    {
      name: 'mandarin',
      src: '/src/images/card-images/mandarin.png',
      clicked: false
    },
    {
      name: 'portuguese',
      src: '/src/images/card-images/portuguese.png',
      clicked: false
    },
    {
      name: 'russian',
      src: '/src/images/card-images/russian.png',
      clicked: false
    },
    {
      name: 'spanish',
      src: '/src/images/card-images/spanish.png',
      clicked: false
    },
    {
      name: 'turkish',
      src: '/src/images/card-images/turkish.png',
      clicked: false
    },
  ]

  // Shuffle images on load
  const newImageList = [...images]
  const shuffledImages = shuffle({ newImageList });

  const [imageList, setImageList] = useState(shuffledImages);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [modalStatus, setModalStatus] = useState("");
  const [gameIsWon, setGameIsWon] = useState(false)
  const [showFront, setShowFront] = useState(true);
  const [pointerEvent, setPointerEvent] = useState(true);

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Gameboard
        imageList={imageList}
        setImageList={setImageList}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setModalStatus={setModalStatus}
        setGameIsWon={setGameIsWon}
        modalStatus={modalStatus}
        showFront={showFront}
        setShowFront={setShowFront}
        setPointerEvent={setPointerEvent}
        pointerEvent={pointerEvent}
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
        gameIsWon={gameIsWon}
        setGameIsWon={setGameIsWon}
        setShowFront={setShowFront}
        setPointerEvent={setPointerEvent}
      />
      <Footer />
    </>
  );
}

export default App;
