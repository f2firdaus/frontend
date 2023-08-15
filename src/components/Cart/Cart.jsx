import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentrequest } from "../../utils/api";
const Cart = ({ setShowCart }) => {

  // const stripeKey=process.env.REACT_STRIPE_KEY
  const { cartSubTotal, cartItems } = useContext(Context);
  const stripePromise = loadStripe("pk_test_51NeshQSDtdAsxD02uYHIeUc3CqPYxt5qXkMNJaGGU5e5QMUocDvtF2fMj9vdUZyd72h7HG5WHI1EeMem3ApkNfxU00xMn0Ltqw")

  const handlePayment = async() => {
    
      const stripe = await stripePromise;
      const res = await makePaymentrequest.post("/api/orders", {
        products: cartItems,

        
      });
    
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    
    
  }
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span onClick={() => setShowCart(false)} className="close-btn">
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in the cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377; {cartSubTotal}</span>
              </div>

              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}> Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
