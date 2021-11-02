import "./portfolioList.scss";

const PortfolioList = ({ title, active, id, setSelect }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelect(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
