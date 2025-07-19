import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sidebar">
                <div className="hamburger-wrapper">
                    <Hamburger
                        toggled={menuOpen}
                        toggle={setMenuOpen}
                        size={24}
                        direction="left"
                        label="Show menu"
                        color="#2f5061"
                    />
                </div>

            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <h1>TrackMyStack</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/stack">My Stack</a></li>
                    <li><a href="/add">Add Item</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;