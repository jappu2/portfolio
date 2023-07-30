import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function HomePage(){
    return(
        <div className="home-page">
            <div className="home-left">
                <div className="logo">
                    <span>Jaber.</span><span>me</span>
                </div>
                <div className="info">
                    <h2>Hello</h2>
                    <div className="name">I'm Jaber</div>
                    <p>A front-end developer and a bunch of other cool things.</p>
                    <div className="hire-button">Hire me</div>
                </div>
                <div className="play-btn">
                <span class="material-symbols-outlined" style={{'fontSize': '45px'}}>play_arrow</span>
                </div>
                
                <div className="social">
                    TW FB GIT ThD
                </div>

            </div>
            <div className="home-right">
                <div className="img-cover">
                </div>
                <div className="brief">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt ut corporis alias itaque quibusdam praesentium fugit eum deserunt dolores ad, 
                        libero inventore similique rerum vel consequatur molestiae consectetur ipsa vero.
                    </p>

                    <div className="brief-button">view resume</div>
                
                </div>
            </div>

        </div>
    )
}