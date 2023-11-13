import videothing from "../whatis.mp4"
export default <>
    <div className="content">
        <div className="section" style={{ minHeight: "unset", height: "auto" }}>
            <div className="centerFlex" style={{ position: "relative" }}>
                <p className="sectionHeaderCompact">About</p>
                <div className="flexGrid gridInfoThing">
                    <div >
                        <p>Founded in</p>
                        <p>2023</p>
                        <p>Established in 2023, Auralis emerged from a shared love for music and a vision to revolutionize the way people experience and enjoy their favorite tunes. Our journey began with a commitment to creating a dynamic and user-friendly music streaming platform, one that seamlessly integrates cutting-edge technology with a deep appreciation for diverse musical genres. Since our founding, we've been on a mission to cultivate a global community of music lovers, connecting them to the rhythms that resonate with their souls. Auralis, born from passion and innovation, continues to evolve as a hub where the magic of music knows no bounds.</p>
                    </div>
                    <div >
                        <p>Over </p>
                        <p>100,000 users</p>
                        <p>With gratitude and excitement, we celebrate a milestone at Auralis — a community that now spans over 100,000 music enthusiasts worldwide. This remarkable journey has been fueled by the collective heartbeat of our users, each contributing to the vibrant tapestry of musical exploration. As we surpass this significant mark, we extend our heartfelt thanks to the Auralis family for making us a part of your sonic adventures. Together, we're harmonizing the world, one listener at a time, and we can't wait to amplify the experience for the next 100,000 and beyond. Cheers to the power of music and the incredible community that continues to make Auralis resonate globally!</p>
                    </div>
                    <div >
                        <p>Download Auralis on</p>
                        <p>Any device</p>
                        <p>Enjoy the magic of music seamlessly across all your devices with Auralis. Whether you're on the go with your smartphone, relaxing at home on your computer, or finding your rhythm with a tablet, our platform ensures a consistent and immersive musical experience. With user-friendly interfaces tailored for each device, Auralis lets you dive into your favorite tunes effortlessly, ensuring that the joy of music is at your fingertips wherever you are. Your experience, your way — because great music knows no bounds</p>
                    </div>
                    <div >
                        <p>Our collective</p>
                        <p>Mission</p>
                        <p>At Auralis, we are passionate about creating a seamless and immersive musical experience for our users. Our mission is to connect music enthusiasts with their favorite tunes and introduce them to new, exciting sounds. Join us on a journey where every beat matters, and music transcends boundaries.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section videoBG">
            <video loop autoPlay muted>
                <source type="video/mp4" src={videothing}></source>
            </video>
        </div>
    </div></>