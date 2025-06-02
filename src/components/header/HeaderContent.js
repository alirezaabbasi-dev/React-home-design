import React from "react";
import HeaderBox from "./HeaderBox";

export default function HeaderContent() {
  return (
    <div className="px-4">
      <img
        className="size-full"
        src="images/header/Hero.png"
        alt="Hero Background"
      />
      <div className="w-1/2 mx-auto grid grid-cols-3 gap-7 -translate-y-1/4">
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
