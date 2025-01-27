import PropTypes from "prop-types";
import "../styles/product.css";
import { MdOutlineLocalOffer } from "react-icons/md";
import useProduct from "../store/useProduct";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ product }) => {
  const { setproduct } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Set to true if you want animations to trigger only once
    });
  }, []);

  const handleClick = () => {
    setproduct(product);
    navigate("/product");
  };
  return (
    <div
      className="product"
      onClick={() => {
        handleClick();
      }}
      data-aos="fade-up"
    >
      <div className="imagecontainer">
        <img src={product.imageUrl} alt="" className="prodimage" />
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <div>
          {console.log(product.rating)}
          {Array(Math.floor(product.rating))
            .fill()
            .map((i) => (
              <span key={i} className="statrating">
                ★
              </span>
            ))}
        </div>
        <div className="product-price">
          <h2 className="discount">- {product.discount} %</h2>
          <h2 className="price">
            {"₹ " +
              (
                product.price -
                (product.discount / 100) * product.price
              ).toFixed(2)}
          </h2>
        </div>
        <h4>
          M.R.P <strike>{"  ₹ " + product.price}</strike>
        </h4>
        <h4 className="product-taxes">All Taxes included</h4>
      </div>
      <h3 className="product-offer">
        Offers
        <MdOutlineLocalOffer />
      </h3>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    rating: PropTypes.number,
  }),
};

export default Product;
