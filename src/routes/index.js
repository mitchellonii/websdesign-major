import icon from "../Auralis-app-icon-colour.svg"
import phone from "../phone-blank.png"
import drem from "../drem.jpeg"
import kiki from "../kiki.jpeg"
import library from "../library.jpeg"
import dj from "../dj.jpeg"
import new__img from "../new.jpeg"
import genre from "../genre.jpeg"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Return() {
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
        <div className="section">
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
        <div className="section smallSection add1" style={{ background: "white", zIndex: 3, transform: "translateY(-20px)" }} >
            <div className="flexGrid gridInfoThing">
                <div id="fadeOnScrollView" className="delay0">
                    <p>With new accounts</p>
                    <p>You could get 6 months free</p>
                    <p style={{ maxWidth: "200px" }}>Embark on a musical journey with Auralis, where signing up opens the door to a special offer – enjoy 6 months of free premium access. </p>
                    <Link className="Link" to={"/login"}>Start trial</Link>
                </div>
                <div id="fadeOnScrollView" className="delay300">
                    <p>View all our</p>
                    <p>Flexibile plans for any price range</p>
                    <p style={{ maxWidth: "200px" }}>Explore Auralis and discover our flexible plans designed to suit any budget. From budget-friendly options to premium packages, we've curated a range of plans to cater to every price range.</p>
                    <Link className="Link" to={"/plans"}>View plans</Link>
                </div>
                <div id="fadeOnScrollView" className="delay600">
                    <p>Download Auralis on</p>
                    <p>Any device</p>
                    <p style={{ maxWidth: "200px" }}>Experience the freedom to download your favorite tunes on any device with Auralis. Our user-friendly platform allows you to seamlessly access your music library offline, whether you're on your smartphone, tablet, or computer.</p>
                    <Link className="Link" to={"/download"}>Download</Link>
                </div>
            </div>
        </div >
    </div ></>
}


export default Return
