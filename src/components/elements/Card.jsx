import "../../Products/products.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarIcon from "@mui/icons-material/Star"; 
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


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
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section data-aos="fade-up" className="card">
      <img
        src={img} // Use the image from data instead of hardcoded URL
        alt={title}
      />
      <div className="card-details">
        <h3 className="shoe-name">{title}</h3>
        <h4>{company}</h4>
        <div className="reviews">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <StarIcon key={index} className="filled" />
            ) : (
              <StarOutlinedIcon key={index} />
            )
          )}

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
