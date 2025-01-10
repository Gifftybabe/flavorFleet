import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  useEffect(()=>{
    console.log(data);
    
  },[data])
  
  return (
    <form>
      <div className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input name="firstName" onChange={onChangehandler} value={data.firstName} type="text" placeholder="First Name" />
            <input name="lastName" onChange={onChangehandler} value={data.lastName} type="text" placeholder="Last Name" />
          </div>
          <input name="email" onChange={onChangehandler} value={data.email} type="email" placeholder="Email address" />
          <input name="street" onChange={onChangehandler} value={data.street} type="text" placeholder="Street" />
          <div className="multi-fields">
            <input name="city" onChange={onChangehandler} value={data.city} type="text" placeholder="City" />
            <input name="state" onChange={onChangehandler} value={data.state} type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input name="zipcode" onChange={onChangehandler} value={data.zipcode} type="text" placeholder="Zip code" />
            <input name="country" onChange={onChangehandler} value={data.country} type="text" placeholder="Country" />
          </div>
          <input name="phone" onChange={onChangehandler} value={data.phone} type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+ 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
