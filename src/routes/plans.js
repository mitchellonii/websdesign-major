import React from 'react'
import { Link } from "react-router-dom"

export default function Viewer() {

    return (
        <>
            <div className="content">
                <div className="section" style={{ height: "700px" }}>

                    <p className="sectionHeaderCompact">Plans</p>

                    <div className='columnContainer'>
                        <div className='columnRow'>
                            <div>
                                <p>A</p>
                            </div>
                        </div>
                    </div>
                    <Link className="Link" to={"/login"}>Buy</Link>
                </div>
            </div></>

    )
}