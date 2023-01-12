import nihilisticKilling from '../assets/files/a nihilisitic killing.pdf';
import breathless from '../assets/files/Breathless Close Reading.pdf';
import wanda from '../assets/files/Wanda Review.pdf'

function Writing() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="shorts">
                    <b>Shorts</b>
                    <br></br>
                    <em>scripts for completed shorts</em>
                    <br></br>
                    <p> 
                    *tba
                    </p>                           
                </div>
                <div className="shorts">
                    <b>Essays</b>
                    <br></br>
                    <em>written for various classes</em>
                    <br></br>
                    <p> 
                    <a href={wanda} target='_blank' rel='noopener noreferrer'>A Review of Wanda</a>
                    </p>                        
                    <p> 
                    <a href={breathless} target='_blank' rel='noopener noreferrer'>Breathless: A Close Reading of the Road </a>
                    </p>     
                    <p> 
                    <a href={nihilisticKilling} target='_blank' rel='noopener noreferrer'>A Nihilistic Killing </a>
                    </p>        
                </div>
            </div>
                
        </div>
    )
}

export default Writing;