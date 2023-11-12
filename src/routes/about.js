import videothing from "../whatis.mp4"
export default <>
    <div className="content">
        <div className="section">
            <div className="centerFlex">
                <p className="sectionHeaderCompact">About</p>

            </div>
        </div>
        <div className="section videoBG">
            <video loop autoPlay muted>
                <source type="video/mp4" src={videothing}></source>
            </video>
        </div>
    </div></>