import './Card.css';
import { handleCardClick } from './Gameboard';
import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect } from 'react';

export default function Card({ src, imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon, showFront, setShowFront, modalStatus }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (!showFront && modalStatus !== "visible") {
            const timeout = setTimeout(() => {
                setShowFront(true);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [showFront]);

    return (
        <div className={"card-container"}>
            <CSSTransition
                in={showFront}
                timeout={1000}
                classNames='flip'
                nodeRef={nodeRef}
            >
                <div className="card" ref={nodeRef}>
                    <div className="card-back">
                        <img className="card-image" src="/public/images/card-images/back.png" />
                    </div>
                    <div className="card-front" onClick={() => handleCardClick({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon, setShowFront, showFront })}>
                        < img className="card-image" src={src} />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}