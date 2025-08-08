import "../Category/category.css";
import Input from "../../components/elements/Input";

const Category = ({ onRadioChange, selectedCategory }) => {
  return (
    <div className="category-container">
      <h1 className="side-bar-title ">Category</h1>
      <div className="category-icons">
        <Input
          onRadioChange={onRadioChange}
          value="all"
          title="All"
          name="category"
          checked={selectedCategory === "all"}
        />
        <Input
          onRadioChange={onRadioChange}
          value="flats"
          title="Flats"
          name="category"
          checked={selectedCategory === "flats"}
        />
        <Input
          onRadioChange={onRadioChange}
          value="sneakers"
          title="Sneakers"
          name="category"
          checked={selectedCategory === "sneakers"}
        />
        <Input
          onRadioChange={onRadioChange}
          value="sandals"
          title="Sandals"
          name="category"
          checked={selectedCategory === "sandals"}
        />
        <Input
          onRadioChange={onRadioChange}
          value="heels"
          title="Heels"
          name="category"
          checked={selectedCategory === "heels"}
        />
      </div>
    </div>
  );
};

export default Category;
