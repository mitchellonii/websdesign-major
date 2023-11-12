import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
export default function Viewer() {
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
    var handleScroll = function (e) {
        Array.from(document.querySelectorAll("#fadeOnScrollView")).forEach(e => {
            if (isScrolledIntoView(e)) e.classList.add("fadeIn")
            else e.classList.remove("fadeIn")
        })
    }
    useEffect(() => {
        document.querySelector("#root").onscroll = handleScroll
    },)
    return (
        <>
            <div className="content">
                <div className="section" style={{ height: "max-content" }}>

                    <p className="sectionHeaderCompact auralisIconDecor">Plans</p>

                    <div className='columnContainer'>
                        <div className='columnRow' >
                            <div style={{ border: "none" }}></div>
                            <div className='centerText' style={{ border: "none", fontWeight: "bold" }}>Free</div>
                            <div className='centerText' style={{ border: "none", fontWeight: "bold" }}>Premium</div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>Advertisment free playback on any device, including banner ads</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>Offline listening, download up to 1,000 songs at any time</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>Free 6-month trial, no payment method needed</p>
                            </div>
                            <div>
                                <p>N/A</p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>AI features, including playlist generation, DJ, and more...</p>
                            </div>
                            <div>
                                <p>Limited</p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>Lorem ipsum</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText">
                                <p>Lorem ipsum</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                            <div>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div className="normalText" style={{ border: "none" }}>
                                <p>Lorem ipsum</p>
                            </div>
                            <div style={{ border: "none" }}>
                                <p></p>
                            </div>
                            <div style={{ border: "none" }}>
                                <p>✓</p>
                            </div>
                        </div>
                        <div className='columnRow'>
                            <div style={{ border: "none" }}>
                                <p></p>
                            </div>
                            <div style={{ border: "none" }}>
                                <div className="linkContainer">
                                    <Link className="linkbuy" to={"/login"} style={{ position: "unset" }}>Sign up</Link>
                                </div>
                            </div>
                            <div style={{ border: "none" }}>
                                <div className="linkContainer">
                                    <Link className="linkbuy" to={"/login"} style={{ position: "unset" }}>Subscribe</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='section plansDesktopSection' style={{ height: "max-content", minHeight: "300px", overflow: "hidden" }}>
                    <div className="gradientBackground" style={{ zIndex: -100 }}></div>
                    <div className="centerText" style={{ zIndex: 100, position: "absolute" }}>
                        <br></br>
                        <br></br>
                        <p className={`sectionText bulitin`} id="fadeOnScrollView">Free <mark>6-month</mark> trial for new users</p>
                        <br></br>
                        <p className={`sectionText bulitin`} id="fadeOnScrollView">Student discounts <mark>avaliable</mark></p>
                        <br></br>
                        <Link id="fadeOnScrollView" to="/login" className='abcde'>Start trial</Link>
                    </div>
                </div>
            </div></>

    )
}