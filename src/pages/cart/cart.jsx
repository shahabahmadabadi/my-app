import React, { useContext } from "react";
import { PRODUCT } from "../../data/products";
import { ShopContext } from "../../components/context/shopcontext";
import Product from "../shop/product";
const Cart =() =>{
    const{cartIthem}=useContext(ShopContext)
    return (

        <React.Fragment>
        <h1>Your Cart Ithems</h1>
        <div>
            {PRODUCT.map((p)=>{
                if(cartIthem.some((i)=>i.id===p.id && i.count>0))
                    return <Product data={p}></Product>
            })}
        </div>
        </React.Fragment>)
}
export default Cart ; 