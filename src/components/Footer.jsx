import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="created-by">
                <p>created by kristenmazza</p>
                <a href="https://github.com/kristenmazza"><img className="icon" src='/images/github-icon.png' /> </a>
            </div>
            <div className="credits">
                speech bubbles by <a href="https://www.freepik.com/free-vector/colorful-speech-bubble_892831.htm#page=2&query=colorful%20speech%20bubbles&position=33&from_view=search&track=ais">Freepik</a>
            </div>
        </footer >
    )
}