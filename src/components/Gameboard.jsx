import './Gameboard.css';
import { useState } from 'react';

// const [imageOrder, setImageOrder] = useState(images);

const images = [
    {
        name: 'korean',
        src: '/public/images/card-images/korean.png'
    },
    {
        name: 'arabic',
        src: '/public/images/card-images/arabic.png'
    },
    {
        name: 'french',
        src: '/public/images/card-images/french.png'
    },
    {
        name: 'german',
        src: '/public/images/card-images/german.png'
    },
    {
        name: 'hindi',
        src: '/public/images/card-images/hindi.png'
    },
    {
        name: 'italian',
        src: '/public/images/card-images/italian.png'
    },
    {
        name: 'japanese',
        src: '/public/images/card-images/japanese.png'
    },
    {
        name: 'mandarin',
        src: '/public/images/card-images/mandarin.png'
    },
    {
        name: 'portuguese',
        src: '/public/images/card-images/portuguese.png'
    },
    {
        name: 'russian',
        src: '/public/images/card-images/russian.png'
    },
    {
        name: 'spanish',
        src: '/public/images/card-images/spanish.png'
    },
    {
        name: 'turkish',
        src: '/public/images/card-images/turkish.png'
    },
]

export default function Gameboard() {
    return (
        <main className="main-container">
            <div className="gameboard-container">
                <Card src={images[0].src} />
                <Card src={images[1].src} />
                <Card src={images[2].src} />
                <Card src={images[3].src} />
                <Card src={images[4].src} />
                <Card src={images[5].src} />
                <Card src={images[6].src} />
                <Card src={images[7].src} />
                <Card src={images[8].src} />
                <Card src={images[9].src} />
                <Card src={images[10].src} />
                <Card src={images[11].src} />
            </div>
        </main>
    )
}

function Card({ src }) {
    return (
        < img className="card-image" src={src} />
    )
}