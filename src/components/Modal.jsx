import './Modal.css'

export default function Modal({ modalStatus }) {
    const classList = modalStatus === "" ? "modal-container" : "modal-container visible"

    return (
        <div className={classList} >
            <section className="modal">
                <p>You clicked _ of 12 cards!</p>
                <button className="play-btn">Play Again</button>
            </section>
        </div >
    )
}