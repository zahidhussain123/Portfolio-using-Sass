import "./testimonial.scss";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Alexa",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "images/twitter.png",
      desc: "It's helped us dramatically.At any given time I acn see exactly what's happening in our business.",
    },
    {
      id: 2,
      name: "Zahid Turi",
      title: "Co-Founder of CoDemy",
      img: "images/zahid.jpg",
      icon: "images/youtube.png",
      desc: "Feeling greatful to share my opinion about one of the great platform ZaidWeb.Codemy is greatly helped by Zaid. ",
      featured: true,
    },
    {
      id: 3,
      name: "Ali",
      title: "CEO of Contor",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      icon: "images/linkedin.png",
      desc: "“Zaid's  greatest strengths versus other solutions I’ve used is its simplicity and ease of customization, which lets companies create the perfect workflow for their unique situations.”",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="images/right-arrow.png" alt="" className="left" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
