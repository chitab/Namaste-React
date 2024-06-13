import React, { useState } from "react";
const Header = () => {
    const [login, setLogin] = useState('Login');
    return(
        <div className="container">
        <img className="img-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" alt="NA" />
            <ul className="ul-list">
                <li className="list">Home</li>
                <li  className="list">About</li>
                <li  className="list">Cart</li>
                <li  className="list"><button onClick={() => {
                    login === 'Login' ? setLogin('LogOut') : setLogin('Login')
                }}>{login}</button></li>

            </ul>
        </div>
    )
}
export default Header;