import './Header.css';
import logo from '/src/images/uni-lang.png';
import Scoreboard from './Scoreboard';

export default function Header({ currentScore, bestScore }) {
    return (
        <header className="header">
            <div className="header-column">
                <img className="logo" src={logo} />
                <div className="header-column instructions">Don't click the same card twice!</div>
            </div>
            <div className="header-column">
                <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            </div>
        </header>
    )
}