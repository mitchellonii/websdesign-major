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
    function handleScroll(e) {
        setScrollAmount(e.target.scrollTop)
    }
    useEffect(() => {
        document.querySelector("#root").onscroll = handleScroll
    }, [])
    return <>   <div className="content">
        <div className="section">
            <img src={icon} alt="" className="iconAnimation" />
            <p className="iconSubtext">Auralis</p>
            <p className="sectionHeader">Music that makes you</p>
            <div class="divlowerhalf">
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
            <div style={{ zIndex: 100, position: "absolute", opacity: Math.max(0, (scrollAmount - 200) / 400) > 1 ? 1 : Math.max(0, (scrollAmount - 200) / 400) }}>
                <p>lorem ipsum</p>
            </div>
        </div>
    </div></>
}


export default Return
