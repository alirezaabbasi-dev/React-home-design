import React from "react";
import MainStars from "./MainStars";
export default function MainBox({ name, img, price, realPrice, rating }) {
  return (
    <div className="w-64">
      <div className="h-75 bg-box-color px-11 py-17 flex items-center justify-center  rounded-xl group relative">
        <img className="" src={img} alt="" />
        <button className="w-41.5 h-11.5 rounded-md opacity-0 bg-[#473BF0] group-hover:opacity-100 hover:opacity-90 transition-opacity cursor-pointer text-white absolute bottom-9 left-0 right-0 mx-auto">
          <sup>+</sup> Add to Cart
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center ">
        <div className="price flex items-center justify-center gap-3">
          <b className="now-price text-[#68D585]">${price}</b>
          {realPrice > 0 && (
            <span className="real-price text-text-primary font-light line-through">
              ${realPrice}
            </span>
          )}
        </div>
        <p className="main-product-title  text-text-primary font-bold mt-2 mb-3">
          {name}
        </p>
        <MainStars />
      </div>
    </div>
  );
}
