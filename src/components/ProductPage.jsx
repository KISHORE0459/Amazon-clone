import useProduct from "../store/useProduct";
import { TbReceiptTax } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { GiCash } from "react-icons/gi";
import "../styles/productpage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const ProductPage = () => {
  const { currentproduct } = useProduct();
  const product = currentproduct[0];
  useEffect(() => {
    window.scrollTo(0, 0);
    // the image postion is sticky and relative to the div it scrolls down when the div is long
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="prod-container">
      <div className="prod-image-container">
        <img
          src={product.imageUrl}
          alt={product.name + " image"}
          className="prod-image"
        />
      </div>
      <div className="prod-details">
        <h2 className="prod-name">{product.name}</h2>
        <div className="rating">
          <h3>Ratings</h3>
          <div>
            {Array(Math.ceil(product.rating))
              .fill()
              .map((i) => (
                <span key={i} className="starrating">
                  ★
                </span>
              ))}
          </div>
        </div>
        <h3 className="limeited-offer">limeted deal</h3>
        <div className="price">
          <h2 className="offer">{"- " + product.discount + "%"}</h2>
          <h2 className="price">
            {"₹" +
              (
                product.price -
                (product.discount / 100) * product.price
              ).toFixed(2)}
          </h2>
        </div>
        <h2 className="prod-price">
          M.R.P : <strike>{"₹" + product.price}</strike>
        </h2>
        <h3 className="tax">
          includeing all taxes <TbReceiptTax />
        </h3>

        <div className="prod-spec">
          <h4>Product Specs</h4>
          <h5>{product.specs}</h5>
        </div>
        <div className="prod-description">
          <h4>Product Description</h4>
          <h5>{product.description}</h5>
        </div>
        <div className="offer-container">
          <div className="offer-image">
            <BiSolidOffer />
            offers
          </div>
          <div className="offers">
            <div>
              Cashback Upto ₹29.97 cashback as Amazon Pay Balance when you pay
              with Amazon Pay ICICI Bank Credit CardsUpto ₹29.97 cashback as
              Amazon Pay Balance when… 1 offer
            </div>
            <div>
              Bank Offer Upto ₹1,750.00 discount on select Credit Cards, Federal
              Bank Debit CardsUpto ₹1,750.00 discount on select Credit Cards,
              Feder… 15 offers
            </div>
            <div>
              Partner Offers Get GST invoice and save up to 28% on business
              purchases. Sign up for freeGet GST invoice and save up to 28% on
              business purchases. 1 offer
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="slider">
            <div className="slidediv">
              <GrServices className="slide-image" />
              <h4>7 days Service Centre Replacement</h4>
            </div>
            <div className="slidediv">
              <CiDeliveryTruck className="slide-image" />
              <h4>Free Delivery</h4>
            </div>
            <div className="slidediv">
              <AiOutlineSafety className="slide-image" />
              <h4>1 Year Warranty</h4>
            </div>
            <div className="slidediv">
              <GiCash className="slide-image" />
              <h4>Cash/Pay on Delivery</h4>
            </div>
            <div className="slidediv">
              <TfiCup className="slide-image" />
              <h4>Top Brand</h4>
            </div>
          </Slider>
        </div>
      </div>
      <div className="order-box">
        <h2 className="price">
          ₹
          {(product.price - (product.discount / 100) * product.price).toFixed(
            2
          )}
        </h2>
        <h3 className="free-delivery">
          Free Delivery <CiDeliveryTruck />
        </h3>
        <h3 className="stock-detail">In Stock</h3>
        <div className="qtn-container">
          <h3>Quantity</h3>
          <input type="number" min={1} className="quantity" />
        </div>
        <button id="addtocart" className="orderbtn">
          add to cart
        </button>
        <button id="buynow" className="orderbtn">
          buy now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
