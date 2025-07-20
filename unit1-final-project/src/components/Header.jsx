import './Header.css';
import { Sling as Hamburger } from 'hamburger-react';

function Header({ menuOpen, setMenuOpen }) {
    return (
        <header className="header">
            <div className="hamburger-wrapper">
                <Hamburger
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    size={24}
                    direction="left"
                    label="Toggle menu"
                    color="#fff"
                />
            </div>
            <h1>TrackMyStack</h1>
        </header>
    );
}

export default Header;