import "../../Products/products.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const Card = ({
  title,
  category,
  company,
  newPrice,
  color,
  prevPrice,
  reviewsCount,
  rating,
  img,
  id,
}) => {
  return (
    <section className="card">
      <img
        src={img} // Use the image from data instead of hardcoded URL
        alt={title}
      />
      <div className="card-details">
        <h3 className="shoe-name">{title}</h3>
        <div className="reviews">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <span className="total-reviews">{reviewsCount}</span>
        </div>
        <div className="price">
          <span>
            <del>{prevPrice}</del> {newPrice}
          </span>
          <div className="bag">
            <LocalMallRoundedIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
