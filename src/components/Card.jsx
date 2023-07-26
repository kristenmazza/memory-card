import './Card.css';
import { handleCardClick } from './Gameboard';
import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect } from 'react';

export default function Card({ src, imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon, showFront, setShowFront, modalStatus, setPointerEvent, pointerEvent }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (!showFront && modalStatus !== "visible") {
            const timeout = setTimeout(() => {
                setShowFront(true);
                setPointerEvent(true);
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

                <div className={pointerEvent ? "card" : "card no-click"} ref={nodeRef}>
                    <div className="card-back">
                        <img className="card-image" src="/src/images/card-images/back.png" />
                    </div>
                    <div className="card-front" onClick={() => handleCardClick({ imageList, setImageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon, setShowFront, showFront, setPointerEvent })}>
                        < img className="card-image" src={src} />
                    </div>
                </div>
            </CSSTransition >
        </div >
    )
}