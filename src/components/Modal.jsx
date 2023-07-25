import { handlePlayAgainClick } from './Gameboard'
import './Modal.css'

export default function Modal({ modalStatus, currentScore, setModalStatus, setCurrentScore, setImageList, images, bestScore, setBestScore }) {
    const classList = modalStatus === "" ? "modal-container" : "modal-container visible"

    return (
        <div className={classList} >
            <section className="modal">
                <p>You selected {currentScore} of 12 unique cards!</p>
                <button className="play-btn" onClick={() => handlePlayAgainClick(setModalStatus, setCurrentScore, setImageList, images, currentScore, bestScore, setBestScore)}>Play Again</button>
            </section>
        </div >
    )
}