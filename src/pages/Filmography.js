import thumbReprise from '../assets/thumbs/thumb_reprise.png';
import thumbBBB from '../assets/thumbs/thumb_bbb.png';
import thumbMad from '../assets/thumbs/thumb_mad.png';
import thumbMontauk from '../assets/thumbs/thumb_montauk.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Filmography() {

    return (
        <div className="container">
            <div className="vertical-container">
            {/* <div className="shorts">
                    <div className="heading">
                        <b> Shorts </b>
                    <br></br>
                    <em> where I dip my toes </em>
                    </div>
                    <div className="h-container">
                        <div className="carousel-container">
                        <Carousel 
                            infiniteLoop="true"
                            width="100%">
                            <div>
                            <iframe title="vimeo-player" 
                                    src="https://player.vimeo.com/video/798638835?h=08152e63b2"
                                    width="640" 
                                    height="360" 
                                    frameborder="0" 
                                    allowfullscreen="true">

                                </iframe>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                    </div>             */}
                <div className="shorts">
                    <div className="heading">
                        <b> Explorations </b>
                    <br></br>
                    <em>where i experiment</em>
                    </div>
                    <div className="h-container">
                        <div className="carousel-container">
                        <Carousel 
                            infiniteLoop="true"
                            width="100%">
                            <div>
                            <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/35HC7BRK5Ek`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                />
                            </div>
                            <div>
                            <iframe width="853" 
                                    height="480" 
                                    src="https://www.youtube.com/embed/u3ukqnO6djM" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen>

                            </iframe>
                            </div>
                            <div>
                                <iframe width="853" 
                                    height="480" 
                                    src="https://www.youtube.com/embed/Nz9jmftxf2A" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <div>
                                {/* <img src={thumbMontauk} alt="about" width="300rem"/> */}
                                <iframe width="853" 
                                    height="480" 
                                    src="https://www.youtube.com/embed/8dwX8Ws5VdE" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filmography;