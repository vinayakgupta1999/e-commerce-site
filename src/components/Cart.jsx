import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeFromCart } from '../redux/cartSlice'
import Navbar from './navbar/Navbar'

const Cart = () => {
    const mycart=useSelector((state) => state.cartReducer.cart);
    // const totalamount=useSelector((state) => state.shopReducer.totalamount);

    const dispatch=useDispatch();
    const handleincrement=(val)=>{
        dispatch(increment({id:val.id}))
    }
    const handledecrement=(val)=>{
        dispatch(decrement({id:val.id}))
    }
    const handleremove=(val)=>{
        dispatch(removeFromCart({id:val.id}))
    }
    const totalamount=()=>{
      const total=  mycart.map((item)=>{
         return item.price*item.qty  
        })
        const initialValue = 0;
       const sumWithInitial = total.reduce(
     (previousValue, currentValue) => previousValue + currentValue,
        initialValue)
  return Number(sumWithInitial).toFixed(2)
    }


    return (
        
        <>
        <Navbar/>
            <section className="main-cart-section p-5">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">{mycart.length}</span> items in shopping cart
                </p>

                <div className="cart-items">
                    <div className="cart-items-container">

                        {mycart.map((curItem,index) => {
                            return (
                                    <div className="items-info" key={index}>
                                        <div className="product-img">
                                            <img src={curItem.image} alt="tp" />
                                        </div>

                                        <div className="title">
                                            <h2>{curItem.name}</h2>
                                            <h3>{curItem.price} $</h3>
                                        </div>
                                        <div className="add-minus-quantity">
                                            {curItem.qty===1 ? "":<i className="fas fa-minus minus" id='removebtn' onClick={()=>handledecrement(curItem)} />}
                                            <input type="text" placeholder={curItem.qty} disabled />
                                            <i className="fas fa-plus plus" onClick={()=>handleincrement(curItem)}></i>

                                        </div>
                                        <div className="price">
                                            <h3>{Number(curItem.price*curItem.qty).toFixed(2)} $</h3>
                                        </div>
                                        <div className="remove-item">
                                            <i
                                                className="fas fa-trash-alt remove"  onClick={()=>handleremove(curItem)}></i>

                                        </div>
                                    </div>

                            );
                        })}
                    </div>
                </div>
                {mycart.length?<div className="card-total">
                    <h3>
                        card total: <span> {totalamount()} $ </span>
                    </h3>
                    <button>CheckOut</button>
                </div>
                :
                ""
                }
            </section>
        </>
    )
}

export default Cart