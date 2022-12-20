import { Link } from "react-router-dom";
import '../main.css';
import './Socials.css';

const Socials= () =>{
    return (
        <div>
            <header class="vertical">
                <div class="bottom">
                    <ul class="navbar">
                        <li>
                        <Link to="youtube.com/@filmbyerka">youtube</Link>
                        <Link to="instagram.com/filmbyerka">instagram</Link>
                        <Link to="letterboxd.com/erikay">letterboxd</Link>
                        </li>
                    </ul>
                </div>
            </header>
                
        </div>
    )
}

export default Socials;