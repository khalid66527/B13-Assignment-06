import React from 'react';
import NavBarImg from "../../products/shopping-cart.png";

const NavBar = ({ selectedProduct }) => {
    return (
        <div className='bg-base-100 shadow-lg'>
            <div className="navbar container mx-auto">

                {/* Left Logo + Mobile  */}
                <div className="navbar-start">

                    {/* Mobile  */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            ☰
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className='menu menu-horizontal px-1 gap-3'>
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <div className="indicator">
                        <img src={NavBarImg} alt="cart" className="w-6" />
                        <span
                            className={`badge badge-sm indicator-item text-white ${selectedProduct.length > 0 ? "bg-red-500" : "hidden"
                                }`}
                        >
                            {selectedProduct.length}
                        </span>
                    </div>
                    <p className="hidden md:block font-bold">Login</p>

                    <button className='btn rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NavBar;