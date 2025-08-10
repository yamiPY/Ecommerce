import Navigation from "./Navigation/NavBar";
import Recomended from "./Recomended/Recomended";
import "./App.css";
import SideBar from "./SideBar/SideBar/SideBar";
import { useState } from "react";
import productsList from "./Db/data";
import Card from "./components/elements/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [query, setQuery] = useState("");
  const [company, setCompany] = useState("all");

  function handleClick(value) {
    
    setCompany(value);
  }
  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value.toLowerCase());
  }

  function handleColorChange(e) {
    setSelectedColor(e.target.value.toLowerCase());
  }

  function handlePriceChange(e) {
    setSelectedPrice(e.target.value.toLowerCase());
  }

  function filteredData(
    products,
    category,
    color,
    price,
    query,
    companyFilter
  ) {
    return products
      .filter((product) => {
        // تحقق من تطابق الشركة (company)
        const matchCompany =
          companyFilter === "all"
            ? true
            : product.company.toLowerCase() === companyFilter.toLowerCase();

        const matchQuery = product.title
          .toLowerCase()
          .includes(query.toLowerCase());

        const matchCategory =
          category === "all"
            ? true
            : product.category.toLowerCase() === category;

        const matchColor =
          color === "all" ? true : product.color.toLowerCase() === color;

        let matchPrice = true;
        const priceValue = product.newPrice;
        if (price !== "all") {
          if (price === "$0-$50")
            matchPrice = priceValue >= 0 && priceValue <= 50;
          else if (price === "$50-$100")
            matchPrice = priceValue > 50 && priceValue <= 100;
          else if (price === "$100-$150")
            matchPrice = priceValue > 100 && priceValue <= 150;
          else if (price === "over $150") matchPrice = priceValue > 150;
        }

        return (
          matchQuery &&
          matchCategory &&
          matchColor &&
          matchPrice &&
          matchCompany
        );
      })
      .map((product) => <Card {...product} key={product.id} />);
  }


  return (
    <div className="app-container">
      <SideBar
        onCategoryChange={handleCategoryChange}
        onColorChange={handleColorChange}
        onPriceChange={handlePriceChange}
        selectedCategory={selectedCategory}
        selectedColor={selectedColor}
        selectedPrice={selectedPrice}
      />
      <div className="main-content">
        <Navigation query={query} onQueryChange={handleInputChange} />
        <Recomended handleClick={handleClick} />
        <div className="card-container">
          {filteredData(
            productsList,
            selectedCategory,
            selectedColor,
            selectedPrice,
            query,
            company
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
