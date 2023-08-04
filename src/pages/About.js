import '../main.css';
import aboutPhoto from './pfp.png';
import Collapsible from "../components/Collapsible";

const content = {
    'objective': {
        p0: 'Erika is a filmmaker from Knoxville, TN and now (newly) based in Brooklyn, NY. She holds a BS in Computer Science and minor in Literature/Film Studies from MIT.',
        p1: 'Email: erikayangfilms@gmail.com | Instagram: @filmbyerka'
    },
    'subjective': {
        p0:'Hi, I\'m Erika, and I don\'t really know what to put for an introduction these days. '
        + 'I\'m 22, but age changes every year. I\'ve been a student my whole life, but will officially graduate in a few months. '
        + 'Professionally, I\'m a software engineer? But that label doesn\'t feel right even though it\'s what I\'ve been studying for the past few years. ',
        p1:'There have become an increasingly few number of certainties in my life - ' 
        + 'or maybe I’ve just become more aware of the uncertainties. ' 
        + 'Many times, I feel like I’m walking on thin ice - one wrong step and down into the depths I go. ' 
        + 'Or like I’m walking with my head barely above water. I can barely swim, so maybe that’s why these are the two specific scenarios that recur. '
        + 'However, amidst all the fog and fear of the future and whatever it may hold lies a singular certainty: the movies. ',
        p2: 'Film has been the one unwavering rock in my life, a rock that has only gotten larger and more secure. ' 
        + 'It might be presumptuous to say film means everything to me, but it’s hard to describe what exactly film means to me. '
        + 'I’ve felt inextricable joy but also crushing melancholy at the theater. I’ve lived through experiences I will never actually live through. '
        + 'I’ve found pieces of myself reflected in made up characters that feel so incredibly real. '
        + 'The more I watch, the more I’ve realized how many of my own stories I want to share and explore as well. ' 
        + 'Many stories boil down to the same core concept, and what makes each story compelling is the creator’s unique perspective. ',
        p3: 'I don’t think I have anything profound to say, but I do have stories I want to tell and I hope to create works that resonate with others as so many have resonated with me. '
        + 'Here\'s to exploring these pockets of existence that compose our everyday lives.'
    }
}

function About() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="image">
                    <img src={aboutPhoto} alt="about" width="250rem"/>
                </div>
                <div className="body-container">
                    <div>
                        <h3>Objectively...</h3>
                        <p>{content['objective'].p0}</p>
                        <p>{content['objective'].p1}</p>
                    </div>
                <   div>
                        <h3>Subjectively...</h3>
                        <p>{content['subjective'].p0}</p>
                        <p>{content['subjective'].p1}</p>
                        <p>{content['subjective'].p2}</p>
                        <p>{content['subjective'].p3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;