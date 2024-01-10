import { useContext} from "react";
import { ShopContext } from "../../components/context/shopcontext";

const Product =(props)=>{
     const{id,productName,productImage,price}=props.data;
     const{cartItems,addToCart,removeFromeCart}=useContext(ShopContext)
    const isInCart = cartItems?.some((item)=>item.id===id)
     return(
        <div className="col-3">
                <img src={productImage} className="w-100"/>
              <h5>  {productName} </h5>
              <p>price:{price}$</p>
              <buttom className='btn btn-info btn-sm'onClick={()=>addToCart(id)}>+</buttom>
              <span className="mx-1">{cartItems?.filter((row)=>row.id===id)[0]?.count}</span>
              {isInCart&&<buttom className='btn btn-info btn-sm'onClick={()=>removeFromeCart(id)}>-</buttom>}

        </div>
    );
};
export default Product







