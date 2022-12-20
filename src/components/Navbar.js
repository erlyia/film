import { Link } from "react-router-dom";
import '../main.css';
import './Navbar.css';

const Navbar= () =>{
    return (
        <div>
            <header className="vertical">
                <div className="left">
                        film by erka
                </div>
                <div className="mid">
                    <ul className="navbar">
                        <li>
                        <Link to="/about">about</Link>
                        <Link to="/filmography">filmography</Link>
                        <Link to="/writing">writing</Link>
                        <Link to="/cinematography">cinematography</Link>
                        </li>
                    </ul>
                </div>     
            </header>
                
        </div>
    )
}

export default Navbar;