import "./navBar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const NavBar = ({ query, onQueryChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          value={query}
          onChange={onQueryChange}
          type="search"
          className="search-input"
          placeholder="Search on your fave shoes"
        />
        <div className="icons">
          <a href="#">
            <ShoppingCartOutlinedIcon />
          </a>
          <a href="#">
            <FavoriteBorderOutlinedIcon />
          </a>
          <a href="#">
            <PersonAddAltOutlinedIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
