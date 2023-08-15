import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { useContext, useState } from "react";

import useFetch from "../../hooks/useFetch";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const {handleAddtoCart} =useContext(Context)
  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
// console.log(data)
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };
  const productee = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                data?.data[0]?.attributes?.img.data?.[0].attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{productee?.title}</span>
            <span className="price">&#8377; {productee?.price}</span>
            <span className="desc">{productee?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={() => {
                handleAddtoCart(data?.data[0], quantity);
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>
                  {" "}
                  {
                    productee?.categories?.data[0]?.attributes?.title}
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={data?.data[0]?.attributes?.categories.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
