import "./sidebar.css";
import Category from "../Category/Category";
import Colors from "../Category/Colors/Colors";
import Price from "../Category/Price/Price";

const SideBar = ({
  onCategoryChange,
  onColorChange,
  onPriceChange,
  selectedCategory,
  selectedColor,
  selectedPrice,
}) => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category
        onRadioChange={onCategoryChange}
        selectedCategory={selectedCategory}
      />
      <Price onPriceChange={onPriceChange} selectedPrice={selectedPrice} />
      <Colors onColorChange={onColorChange} selectedColor={selectedColor} />
    </div>
  );
};

export default SideBar;
