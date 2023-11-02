import icon from "../Auralis-app-icon-colour.svg"
import phone from "../phone-blank.png"
import drem from "../drem.jpeg"
import kiki from "../kiki.jpeg"
import library from "../library.jpeg"
import dj from "../dj.jpeg"
import new__img from "../new.jpeg"
import genre from "../genre.jpeg"
import { useState, useEffect } from "react"


function Return() {
    var [scrollAmount, setScrollAmount] = useState(0)
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
    function handleScroll(e) {
        setScrollAmount(e.target.scrollTop)
        Array.from(document.querySelectorAll("#fadeOnScrollView")).forEach(e => {
            if (isScrolledIntoView(e)) e.classList.add("fadeIn")
            else e.classList.remove("fadeIn")
        })
    }
    useEffect(() => {
        document.querySelector("#root").onscroll = handleScroll
    }, [])

    return <>   <div className="content">
        <div className="section">
            <img src={icon} alt="" className="iconAnimation" />
            <p className="iconSubtext">Auralis</p>
            <p className="sectionHeader">Music that makes you</p>
            <div className="divlowerhalf">
                <div className="verticalScroll" style={{ transform: `translateX(-${scrollAmount / 3}px)` }}>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(50px - ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone}></img>
                        <img alt="" src={drem}></img>
                    </div>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(-50px + ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone} ></img>
                        <img alt="" src={library}></img>

                    </div>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(50px - ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone} ></img>
                        <img alt="" src={kiki}></img>


                    </div>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(-50px + ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone} ></img>
                        <img alt="" src={dj}></img>

                    </div>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(50px - ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone}></img>
                        <img alt="" src={new__img} ></img>

                    </div>
                    <div className="phoneDisplay" style={{ transform: `translateY(calc(-50px + ${Math.pow(Math.sin(scrollAmount / 360), 2) * 50}px))` }}>
                        <img alt="" src={phone} ></img>
                        <img alt="" src={genre} ></img>

                    </div>
                </div>
            </div>
        </div>
        <div className="section" style={{ zIndex: 1 }}>
            <div className="gradientBackground"></div>
            <div className="centerText" style={{ zIndex: 100, position: "absolute", opacity: Math.max(0, (scrollAmount - 200) / 400) > 1 ? 1 : Math.max(0, (scrollAmount - 200) / 400) }}>
                <br></br><br></br><p className="sectionHeaderCompact">Why Auralis?</p>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView"><mark>100 billion</mark> songs at your fingertip</p>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView">AI generated playlists based on <mark>your intrests</mark></p>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView"><mark>Studio</mark> quality, <mark>uncompressed</mark> sound</p>
                <br></br>
                <p className={`sectionText bulitin`} id="fadeOnScrollView">Listen on any device, even when <mark>offline</mark></p>

            </div>
        </div>
        <div className="section smallSection">
            <div className="flexGrid">
                <div>
                    <p>With new accounts</p>
                    <p>You could get 6 months free</p>
                    <p>lorem ipsum</p>
                    <button></button>
                </div>
                <div>
                    <p>View all our</p>
                    <p>Flexibile plans for any price range</p>
                    <p>lorem ipsum</p>
                    <button></button>
                </div>
                <div>
                    <p>View all our</p>
                    <p>Flexibile plans for any price range</p>
                    <p>lorem ipsum</p>
                    <button></button>
                </div>
            </div>
        </div>
    </div></>
}


export default Return
