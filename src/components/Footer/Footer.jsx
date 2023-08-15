import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = ({about}) => {
  return (
    <>
      <footer className="footer" ref={about}>
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              mollitia facilis provident dolorem exercitationem aspernatur at
              numquam. Dolore aut laborum, porro, molestias ea praesentium quos
              eius consequatur, amet saepe blanditiis?
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>

            <div className="c-item">
              <FaLocationArrow />
              <div className="text">Kayaloram Rd ,Kokalta 680088</div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone : 0471 278 0454</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email :fakeemail@email.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre </span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">privacy policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions </span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              JSDEVSTORE 2023 CREATED BY DEV , PREMIUM E-COMMERCE SOLUTION
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
