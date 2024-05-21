import React from 'react'
import img8 from "../assets/motionarteffect-img8.png";

export default function SupportPage() {
  return (
    <div className="bg-gradient w-11/12 mx-auto md:my-32 px-5 md:px-10 py-12 border border-slate-800 rounded-3xl">
      <h3 className="text-center text-slate-200 font-sora text-xl md:text-2xl font-semibold">
        Supported by All Popular Browsers
      </h3>
      <p className="text-center text-slate-300 md:w-1/3 my-4 mx-auto font-[200] font-sora text-lg text-[#EEE5FFBD]">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      <div className="flex justify-center pt-4">
        <img src={img8} alt="" width={400} className="" />
      </div>
    </div>
  );
}
