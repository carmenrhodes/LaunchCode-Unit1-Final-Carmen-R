import { Link } from 'react-router-dom';

function Sidebar({ menuOpen }) {
    return (
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
                <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/add" onClick={() => setMenuOpen(false)}>Add Item</Link>
        </li>
        <li>
          <Link to="/stack" onClick={() => setMenuOpen(false)}>StackerTracker</Link>
        </li>
        <li>
            <Link to="/spot-tracker" onClick={() => setMenuOpen(false)}>Spot Prices</Link>
        </li>
        <li>
            <Link to="/find-shops" onClick={() => setMenuOpen(false)}>Find Coin Shops</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
            </ul>
        </nav>
    );
}

export default Sidebar;