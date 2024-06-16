import React, {useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets';
//basically use this to store data / State and passon to children 



export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

  const[cartItems,setCartItem]= useState({});

  const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  useEffect(()=>{console.log(cartItems)},[cartItems])



    const contextValue ={
      food_list,
      cartItems,
      addToCart,
      setCartItem,
      removeFromCart
  
    }
    
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}

    </StoreContext.Provider>
  )


}

export default StoreContextProvider