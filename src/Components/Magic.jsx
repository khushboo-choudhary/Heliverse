import React from 'react'
import img5 from "../assets/motionarteffect-img5.png";

export default function Magic() {
  return (
    <div className="w-10/12 my-32 mx-auto flex flex-col md:flex-row items-center justify-between text-slate-200 space-y-8 md:space-y-0">
      <div className="max-w-2xl flex flex-col space-y-7 text-center md:text-start">
        <h4 className="text-2xl md:text-4xl font-sora md:leading-[55px] leading-[45px]">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h4>
        <p className="font-outfit text-lg text-slate-400 text-[#EEE5FFBD]">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div className="flex justify-center md:justify-normal">
          <button className="bg-gradient-image px-6 py-4 text-xl rounded-2xl font-sora">
            Purchase From Envato &rarr;
          </button>
        </div>
      </div>

      <div>
        <img src={img5} alt="logo" />
      </div>
    </div>
  );
}
