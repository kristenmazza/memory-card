import './Card.css';
import { handleClick } from './Gameboard';

export default function Card({ src, imageList, setImageList, name, currentScore, setCurrentScore }) {
    return (
        <div className={"card-container"}>
            <div className="card">
                <div className="card-back">
                    <img className="card-image" src="/public/images/card-images/back.png" />
                </div>
                <div className="card-front" onClick={() => handleClick({ imageList, setImageList, name, currentScore, setCurrentScore })}>
                    < img className="card-image" src={src} />
                </div>
            </div>
        </div>
    )
}