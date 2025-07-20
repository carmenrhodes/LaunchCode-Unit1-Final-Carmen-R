import { Link } from 'react-router-dom';

function Sidebar({ menuOpen }) {
    return (
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stack">StackerTracker</Link></li>
                <li><Link to="/add">Add Item</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;