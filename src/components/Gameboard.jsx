import Card from './Card';
import './Gameboard.css';
import { useState } from 'react';
import React from 'react';

export function shuffle({ imageOrder, setImageOrder }) {
    console.log(imageOrder)
    const shuffledImages = [...imageOrder];
    shuffledImages.sort(() => Math.random() - 0.5)

    console.log(shuffledImages);
    setImageOrder(shuffledImages);
}

export default function Gameboard({ imageOrder, setImageOrder }) {
    const cards = imageOrder.map(image => {
        const { name, src } = image;
        return (
            <React.Fragment key={name}>
                <Card src={src} imageOrder={imageOrder} setImageOrder={setImageOrder} />
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

