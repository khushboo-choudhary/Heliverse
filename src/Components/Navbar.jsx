import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#262626] px-10 py-0 h-16 leading-[3.375rem]">
        <div className="flex justify-between items-center">
          <img
            src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt="logo"
            width={150}
          />
          <button className="btn">
            <a
              className="text-white bg-[#82b440] text-sm font-semibold px-4 py-2 leading-6 shadow-[#82b440] text-center rounded"
              href="https://codecanyon.net/checkout/from_item/48826891?license=regular&amp;support=bundle_6month"
            >
              Buy now
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}
