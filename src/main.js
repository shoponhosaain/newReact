import React from 'react';

const Main = () => {
    return (
       <>
       <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="styles.css" />
  <main>
    <div className="signature" id="signature" style={{ position: "relative" }}>
      <div className="backgound">
        <img
          width="100%"
          src="https://i.postimg.cc/RC8D4LVJ/bg-p.png"
          alt=""
          style={{ position: "relative" }}
        />
        <div
          className="content"
          style={{ position: "absolute", top: "0%", left: "15%" }}
        >
          <div className="upperContent">
            <div className="left-content" style={{ marginTop: 14 }}>
              <h1
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: 24,
                  marginLeft: "8rem"
                }}
                className="white"
              >
                Adele Peek
              </h1>
              <h5
                style={{ margin: 0, fontSize: 16, marginLeft: "8rem" }}
                className="white "
              >
                Head of Digital Strategy
              </h5>
              <div
                className="contacts"
                style={{ marginTop: 11, marginLeft: "8rem" }}
              >
                <h5 style={{ margin: 0, fontSize: 13 }} className="white">
                  +61 400 462 248
                </h5>
                <h5 style={{ margin: 0, fontSize: 13 }} className="white">
                  adele@makeithappenhq.com.au
                </h5>
                <h5 style={{ margin: 0, fontSize: 13 }} className="white">
                  <a className="white" href="http://www.makeithappenhq.com.au">
                    http://www.makeithappenhq.com.au
                  </a>
                </h5>
                <h5 style={{ margin: 0, fontSize: 13 }} className="white">
                  <a
                    className="white"
                    href="https://calendly.com/adelemihhq/20min"
                  >
                    Book Meeting
                  </a>
                </h5>
                <div
                  className="icons"
                  style={{ display: "flex", marginTop: 10 }}
                >
                  <a href="https://www.facebook.com/MakeItHappenHQ/">
                    <img
                      width="15px"
                      style={{ borderRadius: ".7rem" }}
                      src="https://i.postimg.cc/jdSC7jCy/fb.png"
                      alt="fb"
                    />
                  </a>
                  <a href="https://www.instagram.com/makeithappenhq//">
                    <img
                      width="15px"
                      style={{ borderRadius: ".3rem", marginLeft: 7 }}
                      src="https://i.postimg.cc/QNKwX2Qs/insta.png"
                      alt="fb"
                    />
                  </a>
                </div>
              </div>
              <div
                className="lowerContent"
                style={{ display: "flex", marginLeft: "7rem" }}
              >
                <h5
                  className="white"
                  style={{ margin: 0, marginTop: 7, fontSize: 10 }}
                >
                  Become our next Warrior or Tribe member, <br />
                  Make it Happen Today!{" "}
                </h5>
                <button
                  className="white"
                  style={{
                    marginLeft: "5rem",
                    marginTop: ".3rem",
                    padding: "0rem 1.3rem",
                    border: "2px solid #dee3f8",
                    borderRadius: ".7rem",
                    fontSize: 8,
                    background: "transparent"
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="right-content">
              <div
                className="image"
                style={{ position: "absolute", right: "0%", top: "10%" }}
              >
                <a href="http://www.makeithappenhq.com.au">
                  <img
                    width="100px"
                    src="https://i.postimg.cc/NMpDg4WP/img.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" style={{ position: "absolute", top: "72%" }}>
          <div className="upperFooter">
            <div className="heading">
              <h5
                style={{
                  margin: 0,
                  marginLeft: 125,
                  fontSize: 8,
                  padding: 5,
                  color: "grey",
                  textAlign: "center"
                }}
              >
                Awards And Media
              </h5>
              <div
                className="icons"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  width="40px"
                  style={{ marginLeft: 125 }}
                  src="https://i.postimg.cc/nLD9X54s/1.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/mZXdN1xQ/2.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/5tg54Dbw/3.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/CdpnH4wh/4.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/SKg1Kghz/5.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/ZnpL6c1H/6.png"
                  alt=""
                  srcSet=""
                />
                <img
                  width="40px"
                  src="https://i.postimg.cc/cHY3zJX4/7.png"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div
            className="lowerFooter"
            style={{ display: "flex", marginLeft: 155, marginTop: 7 }}
          >
            <img
              width="40px"
              src="https://i.postimg.cc/cHrZ56Wg/8.png"
              alt=""
              srcSet=""
            />
            <img
              width="40px"
              src="https://i.postimg.cc/1XQCVYvm/9.png"
              alt=""
              srcSet=""
            />
            <h5 style={{ fontSize: 8, margin: 0, marginLeft: 20 }}>
              I would like to acknowledge the Traditional owners of the lands on
              which we visit and operate. I would <br /> like to pay special
              respects to my people, the Yawuru and Bunuba elders, past, present
              and emerging
            </h5>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

       </>
    );
};

export default Main;