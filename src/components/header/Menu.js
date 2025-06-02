import React from "react";

export default function menu() {
  return (
    <nav className="flex items-center justify-between my-6">
      {/* Menu header */}
      <div className="text-2xl">
        <a href="#">Kiyan</a>
      </div>
      {/* Menu Items */}
      <div>
        <ul className="flex items-center gap-9">
          <li>
            <a href="#Demos">Demos</a>
          </li>
          <li>
            <a href="#Pages">Pages</a>
          </li>
          <li>
            <a href="#Support">Support</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Menu badges */}
      <div>
        <svg className="size-5">
          <use href="#cart-icon"></use>
        </svg>
      </div>
    </nav>
  );
}
