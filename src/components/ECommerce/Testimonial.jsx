import React from "react";

export default function Testimonial() {
  return (
    <section className="ECommerce bg-[#161C2D] text-white">
      <div className="container flex items-center justify-between pt-49 pb-59">
        <div>
          <svg
            width="43"
            height="31"
            viewBox="0 0 43 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7143 0H39.9286L33.7857 12.4H43V31H24.5714V12.4L30.7143 0ZM6.14286 0H15.3571L9.21429 12.4H18.4286V31H0V12.4L6.14286 0Z"
              fill="#68D585"
            />
          </svg>

          <div class="flex mt-34 mb-12.5">
            <svg class="size-5">
              <use href="#star"></use>
            </svg>
            <svg class="size-5">
              <use href="#star"></use>
            </svg>
            <svg class="size-5">
              <use href="#star"></use>
            </svg>
            <svg class="size-5">
              <use href="#star"></use>
            </svg>
            <svg class="size-5">
              <use href="#star"></use>
            </svg>
          </div>
          <p className="max-w-135 text-2xl font-light">
            “OMG! I cannot believe that I have got a brand new room after
            getting your services. It was super easy to order and get started.”
          </p>
        </div>
        <div className="Testimonial overflow-hidden rounded-xl ">
          <img src="./images/main/ECommerce/2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
