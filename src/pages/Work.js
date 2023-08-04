import Collapsible from "../components/Collapsible";

function Work() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="body-container">
                <div className="current-work"> 
                    <h3>What I'm working on right now</h3>
                    <Collapsible label="Letters">
                        <p>An animated film about the friends who make us. Currently in the throes of animating. </p>
                    </Collapsible>
                    <Collapsible label="Run">
                        <p>Doing production and costume design for a short about a Vietnamese illegal immigrant who gets caught up in a Mexican drug cartel</p>
                    </Collapsible>
                    <Collapsible label="Remnants">
                        <p>A short centering around a quiet reckoning of a relationship that never became more.</p>
                    </Collapsible>
                    <Collapsible label="Lost in Aisle 6">
                        <p>Potential feature? Still just a blurb of ideas for now but hoping to start writing soon.</p>
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
                    <p><a href="https://www.instagram.com/p/Cq8DQA7LOUy/?img_index=1">Thoughts on it</a></p>
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
                            <li>A Nihilisic Killing</li>
                            <li>Auteurism in Indigenous Cinema</li>
                            <li>A Close Reading of Breathless</li>
                            <li>Wanda Review</li>
                        </ul>
                    </Collapsible>
                </div>
                </div>
                </div>
            
        </div>
    )
}

export default Work;