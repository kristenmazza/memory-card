import Card from './Card';
import './Gameboard.css';
import React from 'react';

export default function Gameboard({ imageList, setImageList, currentScore, setCurrentScore, setModalStatus, setGameIsWon, modalStatus, showFront, setShowFront, setPointerEvent, pointerEvent }) {

    const cards = imageList.map(image => {
        const { name, src } = image;
        return (
            <React.Fragment key={name}>
                <Card
                    src={src}
                    imageList={imageList}
                    setImageList={setImageList}
                    name={name}
                    currentScore={currentScore}
                    setCurrentScore={setCurrentScore}
                    setModalStatus={setModalStatus}
                    setGameIsWon={setGameIsWon}
                    showFront={showFront}
                    setShowFront={setShowFront}
                    modalStatus={modalStatus}
                    setPointerEvent={setPointerEvent}
                    pointerEvent={pointerEvent}
                />
            </React.Fragment>
        )
    });

    return (
        <main className="main-container">
            <div className="gameboard-container">
                {cards}
            </div>
        </main>
    )
}

export function shuffle({ newImageList }) {
    const shuffledImages = [...newImageList];
    shuffledImages.sort(() => Math.random() - 0.5);

    return shuffledImages;
}

export function createShuffledImageList({ newImageList, setImageList }) {
    const shuffledImages = shuffle({ newImageList });
    setImageList(shuffledImages);
}
