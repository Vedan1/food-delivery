import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
const Cart = () => {

  const{cartItems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (
                <>
                <div className="cart-item-title cart-item-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  {/* <p>{cartItems[item.id]}</p> */}
                  <p>Price: ${item.price}</p>
                  <p> {cartItems[item._id]}</p>
                  <p>Total: ${item.price*cartItems[item._id]}</p>
                  <button onClick={()=>removeFromCart(item._id)}>Remove</button>
                </div>
                <hr />
                </>
              )
          }})
        }
      </div>
    </div>
  )
}

export default Cart