import React, { useState, useEffect } from 'react'
import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import Navbar from './navbar/Navbar'
import axios from 'axios'
import { ProductData } from './data'


const Product = () => {
  const [cart, setCart] = useState(ProductData)

  const mycart = useSelector((state) => state.cartReducer.cart);


  const dispatch = useDispatch();
  const handleAdd = (item) => {
    const cart = [...mycart];
    const data = cart.find((val) => val.id === item.id);
    const cartitem = cart[cart.indexOf(data)];
    if (data) {
      cart[cart.indexOf(data)] = { ...cartitem, qty: (cartitem.qty || 0) + 1 }
    } else {
      cart.push({ ...item, qty: 1 })
    }
    dispatch(addToCart(cart))
  }
  const handleremove = (val) => {
    dispatch(removeFromCart({ id: val.id }))
  }

  return (
    <div >
      <Navbar />
      {cart.map((val, index) => {
        return (
          <div className="cards" key={index}>
            <div className="card">
              <img src={val.image} alt="myPic" className="card_img" />
              <div className="card_info">
                <span className="card_category"> {val.name} </span>
                <span className="card_category"> {val.price} $ </span>
                <div className='btn-info'>
                  <button className="btn" onClick={() => handleAdd(val)}>Add </button>
                  <button className="btn" onClick={() => handleremove(val)}>Remove item from cart</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )
      }

    </div>
  )
}

export default Product
