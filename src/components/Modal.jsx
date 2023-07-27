import { shuffle } from './Gameboard'
import './Modal.css'
import { updateBestScore } from './Scoreboard';
import Gameboard from './Gameboard';

export default function Modal({ modalStatus, currentScore, setModalStatus, setCurrentScore, setImageList, images, bestScore, setBestScore, gameIsWon, setGameIsWon, setShowFront, setPointerEvent }) {
    const classList = modalStatus === "" ? "modal-container" : "modal-container visible"

    const handlePlayAgainClick = () => {
        setModalStatus("");
        setCurrentScore(0);
        setShowFront(true);
        setPointerEvent(true);

        const newImageList = [...images]
        const shuffledImages = shuffle({ newImageList });
        setImageList(shuffledImages);

        updateBestScore(currentScore, bestScore, setBestScore);
        setGameIsWon(false);
    };

    return (
        <div className={classList} >
            <section className="modal">
                {gameIsWon && <div className="announcement"><h2 className="modal-heading">You win! 🏆</h2><p>You selected all 12 unique cards!</p></div>}
                {!gameIsWon && <div className="announcement"><h2 className="modal-heading">You lose! 🤔</h2><p> You selected {currentScore} of 12 unique cards!</p></div>}
                <button className="play-btn" onClick={() => handlePlayAgainClick(setModalStatus, setCurrentScore, setImageList, images, currentScore, bestScore, setBestScore, setGameIsWon, setShowFront, setPointerEvent)}>Play Again</button>
            </section>
        </div >
    )
}