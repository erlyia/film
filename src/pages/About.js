import '../main.css';
import aboutPhoto from './IMG_5008.png';

const content = {
    'about': {
        p1:'There have become an increasingly few number of certainties in my life -' 
        + 'or maybe I’ve just become more aware of the uncertainties. ' 
        + 'Many times, I feel like I’m walking on thin ice - one wrong step and down into the depths I go. ' 
        + 'Or like I’m walking with my head barely above water. I can’t swim, so maybe that’s why these are the two specific scenarios that recur. '
        + 'However, amidst all the fog and fear of the future and whatever it may hold lies a singular certainty: the movies. ',
        p2: 'Film has been the one unwavering rock in my life, a rock that has only gotten larger and more secure. ' 
        + 'It\'s presumptuous to say film means everything to me, but it’s hard to describe what exactly film means to me. '
        + 'I’ve felt inextricable joy but also crushing melancholy at the theater. I’ve lived through experiences I will never actually live through. '
        + 'I’ve found pieces of myself reflected in made up characters that feel so incredibly real. '
        + 'The more I watch, the more I’ve realized how my many own stories I want to share and explore as well. ' 
        + 'Many stories boil down to the same core concept, and what makes each story compelling is the creator’s unique perspective. ',
        p3: 'I don’t think I have anything profound to say, but I do have stories I want to tell and I hope to create works that resonate with others as so many have resonated with me. '
    }
}

function About() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div id="quote">
                    <div className="text-center">
                        <em>"quand ça vas pas, y aura toujours le cinéma"</em>
                    </div>
                </div>
                <div className="image">
                    <img src={aboutPhoto} alt="about" width="20%"/>
                </div>
                <div className="body">
                    {content['about'].p1}
                    <br></br>
                    <br></br>
                    {content['about'].p2}
                    <br></br>
                    <br></br>
                    {content['about'].p3}
                </div>
            </div>
        </div>
    )
}

export default About;