import React from "react";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className="container py-25">
      <div className="flex gap-16 mb-25">
        <div>
          <h4 className="mb-5 text-text-primary font-extralight">Company</h4>
          <ul className="flex flex-col gap-3.5 font-light *:hover:underline *:hover:opacity-80">
            <li>
              <a href="##">About us</a>
            </li>
            <li>
              <a href="##">Contact us</a>
            </li>
            <li>
              <a href="##">Careers</a>
            </li>
            <li>
              <a href="##">Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-text-primary font-extralight">Product</h4>
          <ul className="flex flex-col gap-3.5 font-light *:hover:underline *:hover:opacity-80">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Help desk</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-text-primary font-extralight">Services</h4>
          <ul className="flex flex-col gap-3.5 font-light *:hover:underline *:hover:opacity-80">
            <li>
              <a href="">Digital Marketing</a>
            </li>
            <li>
              <a href="">Content Writing</a>
            </li>
            <li>
              <a href="">SEO for Business</a>
            </li>
            <li>
              <a href="">UI Design</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-text-primary font-extralight">Legal</h4>
          <ul className="flex flex-col gap-3.5 font-light *:hover:underline *:hover:opacity-80">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Return Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-extralight">Contact us</h4>
          <ul className="flex flex-col gap-3.5 text-[#473BF0] font-bold *:hover:underline *:hover:opacity-80">
            <li>
              <a href="">support@brainwave.io</a>
            </li>
            <li>
              <a href="">+133-394-3439-1435</a>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
