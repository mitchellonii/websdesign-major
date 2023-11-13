import auralis_logotxt from "../auralis-logotxt.png"
export default function Header() {
    return <><div className="footer"><div className="section smallSection">
        <div className="gradientBackground" style={{ zIndex: -1 }}></div>
        <div className="footerFlex">
            <div style={{ width: "200px", maxWidth: "unset" }}>
                <img src={auralis_logotxt} alt="logo"></img>
            </div>
            <div className="textrowdivfooter">
                <p className="headerSubtext">Company</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Terms of use</p>
            </div>
            <div className="textrowdivfooter">
                <p>Account</p>
                <p>Dashboard</p>
                <p>Log-in</p>
                <p>Upgrade</p>
            </div>
        </div>
    </div></div></>

}