import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Paises</h1>
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/new"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Crear
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Paises
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/new"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Ciudades
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;