import Card from './Card';
import './Gameboard.css';
import { useState } from 'react';
import React from 'react';

function shuffle({ newImageList }) {
    const shuffledImages = [...newImageList];
    shuffledImages.sort(() => Math.random() - 0.5)

    return shuffledImages;
}

function updateBestScore(currentScore, bestScore, setBestScore) {
    if (currentScore > bestScore) {
        setBestScore(currentScore)
    }
}

export function handlePlayAgainClick(setModalStatus, setCurrentScore, setImageList, images, currentScore, bestScore, setBestScore) {
    setModalStatus("");
    setCurrentScore(0);
    setImageList(images);
    updateBestScore(currentScore, bestScore, setBestScore);
}

function updateCurrentScore({ imageList, name, currentScore, setCurrentScore, setModalStatus }) {
    const selectedImage = imageList.find(current => current.name === name);

    if (selectedImage.clicked) {
        setModalStatus("visible");
    } else {
        incrementCurrentScore({ currentScore, setCurrentScore })
    }
}

function updateClickStatus({ imageList, name, currentScore, setCurrentScore, setModalStatus }) {
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

    updateCurrentScore({ imageList, name, currentScore, setCurrentScore, setModalStatus });
    return newImageList;
}

function incrementCurrentScore({ currentScore, setCurrentScore }) {
    setCurrentScore(currentScore + 1)
}

export function handleCardClick({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, bestScore, setBestScore }) {
    const newImageList = updateClickStatus({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, bestScore, setBestScore });
    const shuffledImages = shuffle({ newImageList, setImageList });
    setImageList(shuffledImages);
}

export default function Gameboard({ imageList, setImageList, currentScore, setCurrentScore, setModalStatus, bestScore, setBestScore }) {
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
                    bestScore={bestScore}
                    setBestScore={setBestScore}
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

