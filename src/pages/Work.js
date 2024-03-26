import Collapsible from "../components/Collapsible";
import breathless from '../assets/files/Breathless Close Reading.pdf';
import wanda from '../assets/files/Wanda Review.pdf';
import auteur from '../assets/files/auteurism_indigenous_cinema.pdf';
import killing from '../assets/files/a nihilisitic killing.pdf';


function Work() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="body-container">
                <div className="current-work"> 
                    <h3>What I'm working on right now</h3>
                    <Collapsible label="Behind the Menu">
                        <p>A documentary series painting the portraits of restaurant owners through the food they make </p>
                    </Collapsible>
                    <Collapsible label="Lost in Aisle 6">
                        <p>Mother daughter relationship struggling with generational and cultural differences</p>
                    </Collapsible>
                    <Collapsible label="Golden Hour">
                        <p>An MIT Live cover of JVKE's 'Golden Hour'</p>
                    </Collapsible>
                </div>
                <div className="past-work">
                    <h3>Previous work</h3>
                    <Collapsible label="What Else (2023) | Short Film">
                        <p> My first short! The times when routines become routine to the point of numbness, to the point where you forget about anything else.</p>
                        <p><a href="https://vimeo.com/798638835?share=copy">Link</a></p>
                    </Collapsible>
                    <Collapsible label="Five, Three Weeks (2023) | Three-Channel Installation">
                    <p> My final project for an exhibition design/installation art class. It's extremely rough, but it was my first foray into something not entirely film. Centering around an existential contemplation of graduation and the struggles of staying present.</p>
                    <p><a href="https://www.instagram.com/p/CsgS9F7g_B2/">Thoughts on it</a></p>
                    </Collapsible>
                    <Collapsible label="Anna Sun (2023) | Music Video">
                        <p> My first music video! A recreation of the original music video by 'Walk the Moon'</p>
                        <p><a href="https://youtu.be/X784OAABZcg">Link</a></p>
                    </Collapsible>
                    <Collapsible label="Explorations | Bite Size Films">
                        <div>
                            <p>For the times when I just want to pick up my camera and shoot things I think are cool.</p> 
                            <p>It started off as a way to practice camerawork, compositions, etc. but it's expanding to more of a spontaneous vibe shooting. Acting on whatever inspires me in the moment and crafting a connection afterwards in the edit. </p>
                            <p>All uploaded to <a href="https://youtube.com/@filmbyerka"> Youtube</a></p>
                        </div>
                        <ul>
                            <li> <a href="https://youtu.be/8dwX8Ws5VdE">Montauk in November</a></li>
                            <li> <a href="https://youtu.be/Nz9jmftxf2A"> Bing, Bang, Bop </a></li>
                            <li> <a href="https://youtu.be/u3ukqnO6djM"> We're All Mad Here</a></li>
                            <li> <a href="https://youtu.be/SA975MGqugU"> Waiting</a></li>
                            <li> <a href="https://youtu.be/35HC7BRK5Ek"> A Reprise</a></li>
                        </ul>
                    </Collapsible>
                    <Collapsible label="Essays">
                        Essays written for various film studies classes
                        <ul>
                            <li><a href={killing}>A Nihilisic Killing</a></li>
                            <li><a href={auteur}>Auteurism in Indigenous Cinema</a></li>
                            <li><a href={breathless}>A Close Reading of Breathless</a></li>
                            <li><a href={wanda}>Wanda Review</a></li>
                        </ul>
                    </Collapsible>
                </div>
                </div>
                </div>
            
        </div>
    )
}

export default Work;