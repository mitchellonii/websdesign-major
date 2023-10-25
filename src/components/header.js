import icon_mono_1428p from '../auralis-icon-1428p-mono.png'

import {
    Link,
} from "react-router-dom";
import {
    useEffect
} from "react"

export default function Header() {
    useEffect(() => {
        const el = document.querySelector(".observed")
        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(el);
    })
    return <><div className="headerContainer">
        <div className="headerFlex">
            <img alt={'auralis icon'} className="icon" src={icon_mono_1428p}></img>
            <Link className="Link" to={"/"}>Home</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>
            <Link className="Link" to={"/p1"}>page 1</Link>


        </div>
    </div>
        <div className="headerContainer observed">

            <div className="headerFlex sticky">

                <p className="headerTitle">Auralis</p>
                <div className="grow"></div>
                <p className="headerSubtitle">Try 6 months for free*</p>

            </div>
        </div>
    </>
}