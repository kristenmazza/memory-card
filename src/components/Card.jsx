import './Card.css';

export default function Card({ src }) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-back">
                    <img className="card-image" src="/public/images/card-images/back.png" />
                </div>
                <div className="card-front">
                    < img className="card-image" src={src} />
                </div>
            </div>
        </div>
    )
}