import { Link } from "react-router-dom";
import '../main.css';
import './Navbar.css';
import {SlSocialYoutube, SlSocialInstagram} from "react-icons/sl";
import {SiLetterboxd } from "react-icons/si";

const Navbar= () =>{
    return (
        <div>
            <header className="vertical">
                <div className="left">
                        film by erka
                </div>
                <div className="socials">
                    <a href="https://instagram.com/filmbyerka"><SlSocialInstagram/> </a>
                    <a href="https://youtube.com/@filmbyerka"><SlSocialYoutube/> </a>    
                    <a href="https://letterboxd.com/erikay"><SiLetterboxd/></a>    
                </div>
                <div className="mid">
                    <Link to="/about">about</Link>
                    <Link to="/filmography">filmography</Link>
                    <Link to="/writing">writing</Link>
                    <Link to="/cinematography">cinematography</Link>
                </div>     
            </header>
                
        </div>
    )
}

export default Navbar;