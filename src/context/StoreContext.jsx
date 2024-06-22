import React, {useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets';
//basically use this to store data / State and passon to children 



export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

  // const[cartValue,setCartValue] = useState(0);
  const[cartItems,setCartItem]= useState({});

  const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
      // setCartValue((prev)=>food_list[itemId].price)
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      // setCartValue((prev)=>prev+food_list[itemId].price)

    }
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  // useEffect(()=>{console.log(cartItems)},[cartItems])
  //  useEffect(()=>{console.log(cartValue)},[cartItems])

  const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item)
        //console.log(itemInfo.price)
        totalAmount += itemInfo.price * cartItems[item]
        //console.log(food_list[item].price+ " X " + cartItems[item])
    }}
    return totalAmount
  }



    const contextValue ={
      food_list,
      cartItems,
      addToCart,
      setCartItem,
      removeFromCart,
      getTotalCartAmount
  
    }
    
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}

    </StoreContext.Provider>
  )


}

export default StoreContextProvider