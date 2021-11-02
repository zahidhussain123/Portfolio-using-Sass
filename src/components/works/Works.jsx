import "./works.scss";
import { useState } from "react";
const Works = () => {
  const [slider, setSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./images/mobile.png",
      title: "Web Design",
      desc: "Web design is an approach that ensures all the pages of the website look, work and feel perfectly on any device. Whether it is a tiny old cell phone with a screen width of 320px.",
      img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      icon: "./images/globe.png",
      title: "Mobile Application",
      desc: "Marketers are familiar with the traditional marketing funnel and the tactics that align with each stage. But mobile app marketing requires investing in different tactics.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./images/writing.png",
      title: "Branding",
      desc: "Brands have faced challenges in 2020, as supply issues led many consumers to look for alternatives. However, brand loyalty is still a key factor in purchasing decisions.",
      img: "https://images.unsplash.com/photo-1590102426319-c7526718cd70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setSlider(slider > 0 ? slider - 1 : 2)
      : setSlider(slider < data.length - 1 ? slider + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${slider * 100}vw` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="images/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="images/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
