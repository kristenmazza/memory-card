import './Card.css';
import { shuffle } from './Gameboard';

export default function Card({ src, imageOrder, setImageOrder }) {
    return (
        <div className={"card-container"}>
            <div className="card">
                <div className="card-back">
                    <img className="card-image" src="/public/images/card-images/back.png" />
                </div>
                <div className="card-front" onClick={() => shuffle({ imageOrder, setImageOrder })}>
                    < img className="card-image" src={src} />
                </div>
            </div>
        </div>
    )
}