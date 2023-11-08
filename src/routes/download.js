import logo from "../Auralis-app-icon-colour.png"
import logoDark from "../Auralis-app-icon-dark.png"
import RenderCanvas from "../components/3dCanvas"
import ios from "../app-store-badge.png"
import gplay from "../google-play-badge.png"

import { useState, useEffect } from "react"

export default function Download() {
    var [scrollAmount, setScrollAmount] = useState(0)
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
    var handleScroll = function (e) {
        setScrollAmount(e.target.scrollTop)
        Array.from(document.querySelectorAll("#fadeOnScrollView")).forEach(e => {
            if (isScrolledIntoView(e)) e.classList.add("fadeIn")
            else e.classList.remove("fadeIn")
        })
    }
    useEffect(() => {
        document.querySelector("#root").onscroll = handleScroll
    },)

    return <>  <div className="content">
        <div className="section">
            <p className="downloadTitle">Download</p>
            <div className="centerFlex">
                <div className="downloadContainer">
                    <div>
                        <p className="downloadTitle">Desktop</p>
                        <img src={logo} alt="logo"></img>
                        <p>Download desktop client for Mac/Windows</p>
                        <p>Auralis 1.2.3-d</p>

                        <p class="downloadButton" onClick={() => { alert('nothing here') }}>Download</p>
                    </div>
                    <div>
                        <p className="downloadTitle">Mobile</p>
                        <img src={logoDark} alt="logo"></img>
                        <p>Download mobile client for iOS/Android</p>

                        <p>Auralis 1.2.3-m</p>
                        <div className="badges">
                            <img src={ios} onClick={() => { alert('nothing here') }} style={{ transform: "scale(0.71)" }} alt="logo"></img>
                            <img src={gplay} onClick={() => { alert('nothing here') }} alt="logo"></img>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        <div class="section">
            <div className="gradientBackground" style={{ zIndex: -10 }}></div>
            <div className="backgroundCanvas" style={{ zIndex: -9 }}>
                <div className='canvasContainer'>
                    <RenderCanvas scrollAmount={scrollAmount}></RenderCanvas>
                </div>
            </div>
            <div className="centerText leftText" style={{ zIndex: 100, position: "absolute", opacity: Math.max(0, (scrollAmount - 200) / 400) > 1 ? 1 : Math.max(0, (scrollAmount - 200) / 400) }}>
                <br></br><br></br><p className="sectionHeaderCompact">Download on any platform</p>
                <br></br>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView"><mark>Easy to use</mark> interface</p>
                <br></br>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView">Download for <mark>free</mark></p>
                <br></br>

            </div>

        </div>
    </div ></>
}