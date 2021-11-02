import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../Data";

const Portfolio = () => {
  const [select, setSelect] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;

      case "content":
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [select]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={select === item.id}
            setSelect={setSelect}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((i) => (
          <div className="item">
            <img src={i.img} alt="" />
            <h3>{i.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
