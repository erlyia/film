import { Link } from "react-router-dom";
import '../main.css';
import './Navbar.css';

const Navbar= () =>{
    return (
        <div>
            <header class="vertical">
                <div class="left">
                        film by erka
                </div>
                <div class="mid">
                    <ul class="navbar">
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