import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import './PlaceOrder.css'
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">

        <h2 style={{ fontSize: "30px",
    fontWeight: "600",
    marginBottom: "50px"}}className="title"> Delivery Information </h2>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />

        <div className="multi-fields">
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="State" />
        </div>

        <input type="text" placeholder="Phone" />
        <input type="submit" value="Place Order" />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
        <div className="cart-total">
          <h2>Checkout Cart</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            ${getTotalCartAmount()}
            <br />
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            ${getTotalCartAmount()===0?0:2}
            <br />
          </div>
          <hr />

          <div className="cart-total-details">
            <p style={{fontWeight:"bold"}}>Total</p>
            <p style={{fontWeight:"bold"}}>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
         <Link to='/place-order'> <button>Checkout All</button></Link>
        </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
