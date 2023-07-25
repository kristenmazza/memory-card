import './Scoreboard.css'

export default function Scoreboard({ currentScore, bestScore }) {
    return (
        <>
            <div className="score">Current score: {currentScore}</div>
            <div className="score">Best score: {bestScore}</div>
        </>
    )
}