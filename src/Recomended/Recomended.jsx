import "./recomended.css";
import Buttons from "../components/elements/Buttons";

const Recomended = ({ handleClick }) => {
  return (
    <div className="container">
      <h1>Recommended</h1>
      <div className="filters">
        <Buttons handleClick={handleClick} value="all" />
        <Buttons handleClick={handleClick} value="Nike" />
        <Buttons handleClick={handleClick} value="Adidas" />
        <Buttons handleClick={handleClick} value="Puma" />
        <Buttons handleClick={handleClick} value="Vans" />
      </div>
    </div>
  );
};

export default Recomended;
