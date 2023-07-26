import { handlePlayAgainClick } from './Gameboard'
import './Modal.css'

export default function Modal({ modalStatus, currentScore, setModalStatus, setCurrentScore, setImageList, images, bestScore, setBestScore, gameIsWon, setGameIsWon, setShowFront }) {
    const classList = modalStatus === "" ? "modal-container" : "modal-container visible"

    return (
        <div className={classList} >
            <section className="modal">
                {gameIsWon && <p>You win! You selected all 12 unique cards!</p>}
                {!gameIsWon && <p>You lose! You selected {currentScore} of 12 unique cards!</p>}
                <button className="play-btn" onClick={() => handlePlayAgainClick(setModalStatus, setCurrentScore, setImageList, images, currentScore, bestScore, setBestScore, setGameIsWon, setShowFront)}>Play Again</button>
            </section>
        </div >
    )
}