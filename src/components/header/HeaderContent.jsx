import React from "react";
import HeaderBox from "./HeaderBox";

export default function HeaderContent() {
  return (
    <div className="px-4">
      <div
        id="Header-Content"
        className="flex flex-col rounded-xl max-w-[1876px] h-screen items-center justify-center text-center text-white"
      >
        <h5 className="mb-10 tracking-widest">Minimal Interior Design</h5>
        <h2 className="text-6xl font-bold max-w-147 leading-18  tracking-wide  ">
          We minimize your waste in every step of the process.
        </h2>
      </div>

      <div className="md:w-1/2 mx-auto grid grid-cols-2 lg:grid-cols-3 md:gap-3 gap-2 lg:gap-7 justify-center lg:-translate-y-1/4 mt-2">
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/Bitmap-1.png"
        />
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/Bitmap-2.png"
        />
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/Bitmap-3.png"
        />
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/Bitmap.png"
        />
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/sofa.png"
        />
        <HeaderBox
          name="Living Room"
          items="23"
          imgSrc="./images/header/header-products/table.png"
        />
      </div>
    </div>
  );
}
