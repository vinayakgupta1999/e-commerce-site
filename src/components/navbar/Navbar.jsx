import React from 'react'
import './navbar.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png'
import { LogoutOutlined } from '@ant-design/icons'


const Navbar = (props) => {
    const navigate = useNavigate();
    const mycart = useSelector((state) => state.cartReducer.cart);
    const handlelogOut = () => {
        localStorage.removeItem('currentuser')
        navigate('/login')
    }

    return (
        <div className="navbar" style={{paddingLeft:'25px',paddingRight:'25px'}}>
            <div className="left-nav">
                <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="right-nav">
                <button className="login-logout-btn" onClick={() => { navigate('/home') }}>Home</button>
                <button className="login-logout-btn" onClick={() => { navigate('/product') }}>Product</button>
                <div onClick={() => { navigate('/cart') }}>
                    <button><i className="fa fa-shopping-cart"></i></button>
                    <span className="total-cart-item">{mycart.length}</span>
                </div>
                <button className="login-logout-btn d-flex justify-content-center align-items-center gap-2" onClick={() => { handlelogOut() }}><LogoutOutlined className='w-50' /> <span>Logout</span></button>
            </div>

        </div>
    )
}

export default Navbar