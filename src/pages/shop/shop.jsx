import React from "react";
import { PRODUCT } from "../../data/products";
import Product from './product'
const shop =() =>{
    return (
        <React.Fragment>
        <h1>SHOP</h1>
        <div className="row">
            {PRODUCT.map((productsData) => {
              return  <Product data={productsData}/>
            })}
        </div>
        </React.Fragment>
    )

}
export default shop ; 