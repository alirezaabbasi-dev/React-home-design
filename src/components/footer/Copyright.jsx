import React from "react";

export default function Copyright() {
  return (
    <div className="flex justify-between items-center border-t border-[#E7E9ED] mt-7 py-4">
      {/* Text Part */}
      <div>
        <p className="text-[15px] flex gap-1 items-center">
          © 2024 Copyright, All Right Reserved, Made by{" "}
          <a
            className="font-bold underline"
            href="https://github.com/alirezaabbasi-dev"
            target="_blank"
          >
            Kiyan Abbasi
          </a>{" "}
          & Designed by Seju_ui_ux with
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8427 1.20657C11.2998 -0.401767 8.78893 -0.401767 7.24579 1.20657C7.16024 1.29575 7.07835 1.38968 7.00011 1.48806C6.92188 1.38937 6.83999 1.29575 6.75414 1.20625C5.2113 -0.402085 2.70038 -0.402085 1.15724 1.20625C-0.3859 2.81459 -0.385595 5.43211 1.15724 7.04077L6.78458 12.907C6.84394 12.9689 6.92188 13 6.99981 13C7.07774 13 7.15568 12.9689 7.21504 12.907L12.8424 7.04077C14.3858 5.43243 14.3858 2.81491 12.8427 1.20657Z"
              fill="#68D585"
            />
          </svg>
        </p>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-7">
        <a href="##">
          <svg className="size-5">
            <use href="#twitter"></use>
          </svg>
        </a>

        <a href="##">
          <svg className="size-5">
            <use href="#facebook"></use>
          </svg>
        </a>

        <a href="##">
          <svg className="size-5">
            <use href="#instagram"></use>
          </svg>
        </a>

        <a href="##">
          <svg className="size-5">
            <use href="#linkedin"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}
