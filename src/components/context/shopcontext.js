import { createContext, useState } from "react";

export const ShopContext =createContext(null);

export const ShopContextProvider =(props) =>{
    const [cartIthems,setCartIthems]=useState([])
    
    const addToCart=(itemId)=>{
        if(!cartIthems?.find(item=>item.id===itemId))
        setCartIthems([...cartIthems , {id:itemId,count :1}])
        setCartIthems(cartIthems.map((item)=>{
            if(item.id===itemId)
                return{...item,count:item.count+1}
            else return item
        }))
    }
    const removeFromeCart=(itemId)=>{
        setCartIthems(cartIthems.map((i)=>{
            if(i.id===itemId)
            return{...i, count:i.count===0 ? 0: i.count - 1}
            else return i 
        }))
    }
    const contextValue ={cartIthems,addToCart,removeFromeCart}
    return<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}