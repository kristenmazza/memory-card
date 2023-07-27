import './Scoreboard.css'

export default function Scoreboard({ currentScore, bestScore }) {
    return (
        <>
            <div className="score">Current score: {currentScore}</div>
            <div className="score">Best score: {bestScore}</div>
        </>
    )
}

export function updateBestScore(currentScore, bestScore, setBestScore) {
    if (currentScore > bestScore) {
        setBestScore(currentScore)
    }
}

export function updateCurrentScore({ imageList, name, currentScore, setCurrentScore, setModalStatus, setGameIsWon }) {
    const selectedImage = imageList.find(current => current.name === name);

    if (selectedImage.clicked) {
        setModalStatus("visible");
    } else {
        incrementCurrentScore({
            currentScore, setCurrentScore, setGameIsWon, setModalStatus
        })
    }
}

function displayWin(setGameIsWon, setModalStatus) {
    setGameIsWon(true);
    setModalStatus("visible");
}

export function incrementCurrentScore({ currentScore, setCurrentScore, setGameIsWon, setModalStatus }) {
    setCurrentScore(currentScore + 1)

    if (currentScore + 1 === 12) {
        displayWin(setGameIsWon, setModalStatus)
    }
}