import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("removed");
  };
  const addToCart = () => {
    dispatch(add(item));
    toast.success("added");
  };
  return (
    <div className="flex w-full flex-col items-center justify-between border rounded-xl  gap-3  mt-10 ml-5 p-4 mx-auto hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-[10px] text-left font-normal text-gray-400">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="product-image" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between w-full gap-12 px-2 py-3 mt-5 ">
        <div>
          <p className="font-semibold text-green-600 "> ₹{item.price * 10}</p>
        </div>
        <div>
          {cart.some((i) => item.id === i.id) ? (
            <button
              onClick={removeFromCart}
              className="px-4 py-1 text-[12px] font-semibold text-gray-700 uppercase transition duration-300 border-2 border-gray-700 rounded-3xl hover:bg-gray-800 hover:text-white "
            >
              <p>Remove item</p>
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="px-3 py-1 text-[12px] font-semibold text-gray-700 uppercase transition duration-300 border-2 border-gray-700 rounded-3xl hover:bg-gray-800 hover:text-white"
            >
              <p>Add to cart</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
