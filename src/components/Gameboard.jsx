import Card from './Card';
import './Gameboard.css';
import React from 'react';
import { useState } from 'react';

export function shuffle({ newImageList }) {
    const shuffledImages = [...newImageList];
    shuffledImages.sort(() => Math.random() - 0.5);

    return shuffledImages;
}

function createShuffledImageList({ newImageList, setImageList }) {
    const shuffledImages = shuffle({ newImageList });
    setImageList(shuffledImages);
}

function updateBestScore(currentScore, bestScore, setBestScore) {
    if (currentScore > bestScore) {
        setBestScore(currentScore)
    }
}

export function handlePlayAgainClick(setModalStatus, setCurrentScore, setImageList, images, currentScore, bestScore, setBestScore, setGameIsWon, setShowFront) {
    setModalStatus("");
    setCurrentScore(0);
    setShowFront(true);

    const newImageList = [...images]
    const shuffledImages = shuffle({ newImageList });
    setImageList(shuffledImages);

    updateBestScore(currentScore, bestScore, setBestScore);
    setGameIsWon(false);
}

function updateCurrentScore({ imageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon }) {
    const selectedImage = imageList.find(current => current.name === name);

    if (selectedImage.clicked) {
        setModalStatus("visible");
    } else {
        incrementCurrentScore({
            currentScore, setCurrentScore, setGameIsWon, setModalStatus
        })
    }
}

function updateClickStatus({ imageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon }) {
    const newImageList = imageList.map(image => {
        if (image.name !== name) {
            return image;
        } else {
            return {
                ...image,
                clicked: true,
            };
        }
    });

    updateCurrentScore({
        imageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon
    });
    return newImageList;
}

function displayWin(setGameIsWon, setModalStatus) {
    setGameIsWon(true);
    setModalStatus("visible");
}

function incrementCurrentScore({ currentScore, setCurrentScore, setGameIsWon, setModalStatus }) {
    setCurrentScore(currentScore + 1)

    if (currentScore + 1 === 12) {
        displayWin(setGameIsWon, setModalStatus)
    }
}

export function handleCardClick({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon, setShowFront }) {
    setShowFront(false);
    const newImageList = updateClickStatus({
        imageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon
    });

    setTimeout(() => {
        createShuffledImageList({ newImageList, setImageList });
    }, "300");
}

export default function Gameboard({ imageList, setImageList, currentScore, setCurrentScore, setModalStatus, setGameIsWon, modalStatus, showFront, setShowFront }) {
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

