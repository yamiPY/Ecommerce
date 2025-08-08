import "../Price/price.css";
import Input from "../../../components/elements/Input";

const Price = ({ onPriceChange, selectedPrice }) => {
  return (
    <div className="category-container">
      <h2 className="side-bar-title price-title">Price</h2>
      <div className="category-icons">
        <Input
          onRadioChange={onPriceChange}
          value="all"
          title="All"
          name="price"
          checked={selectedPrice === "all"}
        />
        <Input
          onRadioChange={onPriceChange}
          value="$0-$50"
          title="$0-$50"
          name="price"
          checked={selectedPrice === "$0-$50"}
        />
        <Input
          onRadioChange={onPriceChange}
          value="$50-$100"
          title="$50-$100"
          name="price"
          checked={selectedPrice === "$50-$100"}
        />
        <Input
          onRadioChange={onPriceChange}
          value="$100-$150"
          title="$100-$150"
          name="price"
          checked={selectedPrice === "$100-$150"}
        />
        <Input
          onRadioChange={onPriceChange}
          value="over $150"
          title="Over $150"
          name="price"
          checked={selectedPrice === "over $150"}
        />
      </div>
    </div>
  );
};

export default Price;
