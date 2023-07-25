import './Card.css';
import { handleCardClick } from './Gameboard';

export default function Card({ src, imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon }) {
    return (
        <div className={"card-container"}>
            <div className="card">
                <div className="card-back">
                    <img className="card-image" src="/public/images/card-images/back.png" />
                </div>
                <div className="card-front" onClick={() => handleCardClick({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon })}>
                    < img className="card-image" src={src} />
                </div>
            </div>
        </div>
    )
}