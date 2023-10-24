import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-screen py-2 mx-auto ">
      <div className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <img src="/logo.png" alt="logo-image" className="h-14" />
        </NavLink>
        <div className="flex mr-5 text-xl font-medium gap-x-6 text-slate-100">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs bg-green-600 rounded-full -right-2 -top-1 animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
