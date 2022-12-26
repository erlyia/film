import { Link } from "react-router-dom";
import '../main.css';
import './Socials.css';

const Socials= () =>{
    return (
        <div>
            <header className="vertical">
                <div className="bottom">
                    <ul className="navbar">
                        <li>
                        <Link to="/youtube">youtube</Link>
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