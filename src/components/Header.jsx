import './Header.css';
import logo from '../assets/images/uni-lang.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-column">
                <img className="logo" src={logo} />
                <div className="header-column instructions">Don't click the same card twice!</div>
            </div>
            <div className="header-column">
                <div className="score">Current score:</div>
                <div className="score">High score:</div>
            </div>
        </header>
    )
}