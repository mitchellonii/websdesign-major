import logo from "../Auralis-app-icon-colour.png"
import logoDark from "../Auralis-app-icon-dark.png"
import RenderCanvas from "../components/3dCanvas"
import ios from "../app-store-badge.png"
import gplay from "../google-play-badge.png"
export default <>
    <div className="content">
        <div className="section">
            <p className="headerTitle">Download</p>
            <div className="centerFlex">
                <div className="downloadContainer">
                    <div className="backgroundCanvas">
                        <div className='canvasContainer'>
                            <RenderCanvas></RenderCanvas>
                        </div>
                    </div>
                    <div>
                        <p className="downloadTitle">Desktop</p>
                        <img src={logo} alt="logo"></img>
                        <p>Download desktop client for Mac/Windows</p>
                        <p>Auralis 1.2.3-d</p>

                        <p class="Link">Download</p>
                    </div>
                    <div>
                        <p className="downloadTitle">Mobile</p>
                        <img src={logoDark} alt="logo"></img>
                        <p>Download mobile client for iOS/Android</p>

                        <p>Auralis 1.2.3-m</p>
                        <div className="badges">
                            <img src={ios} style={{ transform: "scale(0.71)" }} alt="logo"></img>
                            <img src={gplay} alt="logo"></img>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div ></>