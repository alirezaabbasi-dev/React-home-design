import React from "react";

export default function HeaderBox({ name, items, imgSrc }) {
  return (
    <div className="max-w-88 pt-8 rounded-xl bg-box-color cursor-pointer hover:bg-white transition-all ">
      <a href="##">
        <div className="ml-5 md:ml-11">
          <h3 className="text-text-primary font-bold text-xl md:text-2xl text-left">
            {name}
          </h3>
          <p className="pb-12 text-sm md:text-xl">
            <span>{items}</span> Items
          </p>
        </div>
        <div className="w-full px-10 lg:px-20 pb-7 lg:pb-14">
          <img className="w-full" src={imgSrc} alt="" />
        </div>
      </a>
    </div>
  );
}
