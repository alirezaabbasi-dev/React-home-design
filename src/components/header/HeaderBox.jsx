import React from "react";

export default function HeaderBox({ name, items, imgSrc }) {
  return (
    <div className="max-w-88 pt-8 rounded-xl bg-box-color cursor-pointer hover:bg-white transition-all ">
      <a href="##">
        <div className="ml-11">
          <h3 className="text-text-primary font-bold text-2xl text-left">
            {name}
          </h3>
          <p className="pb-12">
            <span>{items}</span> Items
          </p>
        </div>
        <div className="size-full px-20 pb-14">
          <img className="" src={imgSrc} alt="" />
        </div>
      </a>
    </div>
  );
}
