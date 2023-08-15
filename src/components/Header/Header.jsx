import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useContext, useEffect, useRef, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const Header = ({handleCat,handleAbout}) => {
  // const { id } = useParams();
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
 
  const handleScroll = () => {
    const offset = window.scrollY;
    //    const data= Math.round(offset)
    // console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <header className={`main-header ${scrolled ? "stickey-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={handleAbout} >About</li>
            <li onClick={handleCat}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            MUSIC WAVES
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span onClick={() => setShowCart(true)} className="cart-icon">
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
