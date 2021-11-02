import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
const Intro = () => {
  const txtRef = useRef();
  useEffect(() => {
    init(txtRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator","Youtuber"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/z2.png" alt="img"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am </h2>
          <h1>Zahid Hussain</h1>
          <h3>
            Freelancer <span ref={txtRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
