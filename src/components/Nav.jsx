import PropTypes from "prop-types";
import "../styles/nav.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
  const [showlanguage, setshowlanguage] = useState(false);
  // const Width = useRef(
  //   document.documentElement.scrollHeight > window.innerHeight
  //     ? "98.8vw"
  //     : "100vw"
  // );

  // console.log(Width);

  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/">
          {" "}
          <img src="src/assets/amazonlogo.png" alt="" className="nav__logo" />
        </Link>

        <div className="nav__location">
          <CiLocationOn className="nav__locationlogo" />
          <div>
            <h6 className="nav__locationarea">Delivery to {user.city}</h6>
            <h4>Update Location</h4>
          </div>
        </div>
        <div className="nav__search">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="nav__search__input"
          />
          <div className="nav__search__btn">
            <IoSearch className="nav__search__btn__logo" />
          </div>
        </div>
        <div className="nav__items">
          <div
            className="nav__language"
            onMouseOver={() => {
              setshowlanguage(true);
            }}
            onMouseLeave={() => {
              setshowlanguage(false);
            }}
          >
            <img src={user.image} alt="" />
            <h3 className="nav__language__country" id="locationcode">
              {user.countrycode}
            </h3>
            <IoMdArrowDropdown />
            {showlanguage && (
              <ShowLanguage
                style={{
                  left: document.getElementById("locationcode").offsetWidth,
                }}
              />
            )}
          </div>
          <div className="userlogin">
            <h4 className="nav__userlogin">
              {user.name.length != 0
                ? "Hello " + user.name
                : "Welcome , Sign In"}
            </h4>
            <div className="nav__accounts">
              <h3>Acccounts & Lists</h3>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="nav__return">
            <h4>return</h4>
            <h3>&Order</h3>
          </div>
          <div className="nav__cart">
            <FiShoppingCart className="cartlogo" />
            <h2 id="cartitems">0</h2>
          </div>
        </div>
      </nav>
      <nav className="mobilenav">
        <Link to="/">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERQZ_OMmTpmceWkD12o5V2QxLAW_nW0omBw&s"
            alt=""
            className="nav__logo__mobile"
          />
        </Link>
        <div className="nav__search">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="nav__search__input"
          />
          <div className="nav__search__btn">
            <IoSearch className="nav__search__btn__logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};
Nav.propTypes = {
  user: PropTypes.object,
};

const ShowLanguage = () => {
  const languages = ["English", "Tamil", "Hindi"];
  return (
    <div className="selectlanguages">
      <ul className="languagelist">
        {languages.map((ln) => (
          <li key={ln} className="languages">
            <input type="radio" value={ln} onClick={() => {}} />
            <h4>{ln}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
