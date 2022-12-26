import aboutPhoto from './IMG_5008.png';

function Filmography() {

    return (
        <div className="container">
            <div className="vertical-container">
                <div className="horizontal-container">
                    <div className="shorts">
                    <b>Explorations</b>
                    <br></br>
                    <em>where i experiment</em>
                    <br></br>
                    <br></br>
                    <p> <span className="hiddentxt">a reprise </span>
                    <span className="hiddenimg"> <img src={aboutPhoto} alt="about" width="20%"/> </span>
                    </p>
                    <br></br>
                    we're all mad here
                    <br></br>
                    bing bang bop
                    <br></br>
                    montauk in november
                    </div>
                </div>
                
            </div>
            <div className="body">

            </div>
        </div>
    )
}

export default Filmography;