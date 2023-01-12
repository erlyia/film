import thumbReprise from '../assets/thumbs/thumb_reprise.png';
import thumbBBB from '../assets/thumbs/thumb_bbb.png';
import thumbMad from '../assets/thumbs/thumb_mad.png';
import thumbMontauk from '../assets/thumbs/thumb_montauk.png';

function Filmography() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="shorts">
                    <div className="heading">
                    <b>Explorations</b>
                    <br></br>
                    <em>where i experiment</em>
                    </div>
                    <p className="film"> 
                    <a href="https://www.youtube.com/watch?v=35HC7BRK5Ek">a reprise <em>(dec. 2022)</em> </a>
                    <img src={thumbReprise} alt="about" width="300rem"/>
                    </p>                        
                    <p className="film"> 
                    <a href="https://www.youtube.com/watch?v=u3ukqnO6djM">we're all mad here <em>(dec. 2022)</em></a>
                    <img src={thumbMad} alt="about" width="300rem"/>
                    </p>     
                    <p className="film"> 
                    <a href="https://www.youtube.com/watch?v=Nz9jmftxf2A">bing bang bop <em>(nov. 2022)</em></a>
                    <img src={thumbBBB} alt="about" width="300rem"/>
                    </p>     
                    <p className="film"> 
                    <a href="https://www.youtube.com/watch?v=8dwX8Ws5VdE">montauk in november <em>(nov. 2022)</em></a>
                    <img src={thumbMontauk} alt="about" width="300rem"/>
                    </p>     
                    </div>
            </div>
                
        </div>
    )
}

export default Filmography;