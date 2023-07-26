import { handlePlayAgainClick } from './Gameboard'
import './Modal.css'

export default function Modal({ modalStatus, currentScore, setModalStatus, setCurrentScore, setImageList, images, bestScore, setBestScore, gameIsWon, setGameIsWon, setShowFront, setPointerEvent }) {
    const classList = modalStatus === "" ? "modal-container" : "modal-container visible"

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