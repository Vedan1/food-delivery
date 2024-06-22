import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-item">
        {/* {cartItems?: <></>}  */}
        
                  <div className={getTotalCartAmount()===0?'hidden':"cart-item-title"} id ='hid'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>{" "}
                  </div>
                  <br />
                  <hr />
                
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
              

                <div className="cart-item-title cart-item-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  {/* <p>{cartItems[item.id]}</p> */}
                  <p>Price: ${item.price}</p>
                  <p> {cartItems[item._id]}</p>
                  <p>Total: ${item.price*cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
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
        <div className="cart-promocode">
          <p>If You have Promo-code, Enter it Here. </p>
          <div className="promo-code-input">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
