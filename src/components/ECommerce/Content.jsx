import React, { Component } from "react";

export default class content extends Component {
  render() {
    return (
      <section className="content ECommerce bg-[#473BF0] text-white">
        <div className="container flex items-center justify-between  py-37">
          <div className="size-full *:object-contain">
            <img src="./images/main/ECommerce/1.png" alt="" />
          </div>
          <div>
            <h2 className="max-w-97 text-3xl font-bold">
              Track your progress with our advanced site.
            </h2>
            <p className="text-white/80 font-light pt-5 pb-9 leading-8 w-102">
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand.
            </p>
            <a
              className="flex items-center justify-start gap-5 hover:underline"
              href="##"
            >
              Start shopping
              <svg className="size-4">
                <use className="" href="#arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
