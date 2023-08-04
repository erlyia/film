import { Link } from "react-router-dom";
import '../main.css';
import './Navbar.css';
import {SlSocialYoutube, SlSocialInstagram} from "react-icons/sl";
import {SiLetterboxd , SiVimeo, SiSubstack} from "react-icons/si";
import sig from '../assets/sig.png';

const Navbar= () =>{
    return (
        <div >
            <header className="vertical">
                <div className="left">
                        <img className="overlay" src={sig} alt='sig'/>
                        <div className="text">erika yang</div>
                </div>
                <div className="socials">
                <a href="https://instagram.com/filmbyerka" target='_blank' rel='noopener noreferrer'><SlSocialInstagram/> </a>
                    <a href="https://vimeo.com/erikayang" target='_blank' rel='noopener noreferrer'><SiVimeo/></a>
                    <a href="https://letterboxd.com/erikay" target='_blank' rel='noopener noreferrer'><SiLetterboxd/></a>
                    <a href="https://erikad1c.substack.com/" target='_blank' rel='noopener noreferrer'><SiSubstack/></a>
                    <a href="https://youtube.com/@filmbyerka" target='_blank' rel='noopener noreferrer'><SlSocialYoutube/> </a>
                          
                </div>
                <div className="mid">
                    <div><Link to="/about">about</Link></div>
                    <div><Link to="/work">work</Link></div>
                    <div><Link to="/thoughts">thoughts</Link></div>
                </div>     
            </header>
                
        </div>
    )
}

export default Navbar;