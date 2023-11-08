import React from 'react'
import RenderCanvas from "../components/3dCanvas"
import { Link } from "react-router-dom"

export default function Viewer() {

    return (
        <>
            <div className="content">
                <div className="section" style={{ height: "700px" }}>
                    <div className="backgroundCanvas">
                        <div className='canvasContainer'>
                            <RenderCanvas></RenderCanvas>
                        </div>
                    </div>
                    <p className="sectionHeaderCompact">Plans</p>

                    <div className='columnContainer'>
                        <div className="edge">
                            <div className="columnBlock" style={{ border: "none" }}>
                                <p>​</p>
                            </div>
                            <div className="columnBlock">
                                <p>Ad-free playback from any device, including banner ads:</p>
                            </div>
                            <div className="columnBlock">
                                <p>High, studio-quality, uncompressed sound for an immersive listening experience:</p>
                            </div>
                            <div className="columnBlock">
                                <p>AI features, such as playlist creation, DJ mixing, and more..</p>
                            </div>
                            <div className="columnBlock">
                                <p>Offline listening, download up to 1,000 songs at any given time</p>
                            </div>
                        </div>

                        <div className="free">
                            <div className="columnBlock" style={{ border: "none" }}>
                                <p className='bold'>Free</p>
                            </div>
                            <div className="columnBlock">
                                <br></br>
                                <p>No</p>
                                <br></br>
                            </div>
                            <div className="columnBlock">
                                <p>120kbps</p>
                            </div>
                            <div className="columnBlock">
                                <p>Limited</p>
                            </div>
                            <div className="columnBlock">
                                <p>No</p>
                            </div>
                        </div>
                        <div className="premium">
                            <div className="columnBlock" style={{ border: "none" }}>
                                <p className='bold'>Premium</p>
                            </div>
                            <div className="columnBlock">
                                <p>Yes</p>
                            </div>
                            <div className="columnBlock">
                                <p>360kbps</p>
                            </div>
                            <div className="columnBlock">
                                <p>Unlimited</p>
                            </div>
                            <div className="columnBlock">
                                <p>Yes</p>
                            </div>
                        </div>
                    </div>
                    <Link className="Link" to={"/login"}>Buy</Link>
                </div>
            </div></>

    )
}