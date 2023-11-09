import icon from "../Auralis-app-icon-dark.png"
export default <>
    <div className="content">
        <div className="section">
            <div className="centerFlex" style={{ padding: 0, alignItems: "center", flexDirection: "column" }}>
                <div className="loginContainer">
                    <p className="auralisIconDecor loginSignuptext">Login/Sign-up</p>
                    <form onClick={(e) => { e.preventDefault() }}>
                        <label htmlFor="uname">Username</label>
                        <input id="uname" placeholder="email@gmail.com" type="text"></input>
                        <label htmlFor="pword">Password</label>
                        <input id="pword" placeholder="password123" type="text"></input>
                        <button type="submit">Log in</button>
                    </form>

                </div>

            </div>
        </div>
    </div></>