import React from 'react'
import img10 from "../assets/motionarteffect-img10.png";
import img11 from "../assets/motionarteffect-img11.png";

export default function SectionPage() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-slate-200 flex flex-col space-y-2 text-4xl text-center">
        <h3>Apply On Any Section Or Enable </h3>
        <h3>For Whole Page</h3>
      </div>

      <div className="my-16 md:flex md:h-[600px] justify-between md:space-x-6">
        <div className="bg-gradient md:w-3/6 px-8 py-6 flex flex-col space-y-6 border border-slate-800 rounded-2xl h-fit">
          <h4 className="font-sora text-slate-200 text-2xl">
            Apply On Section
          </h4>
          <p className="font-outfit text-slate-400 text-[#EEE5FFBD]">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={img11} alt="" />
        </div>

        <div className="bg-gradient mt-8 md:mt-16 md:w-3/6 px-8 py-6 flex flex-col space-y-6 border border-slate-800 rounded-2xl h-fit">
          <h4 className="font-sora text-slate-200 text-2xl">Apply On Page</h4>
          <p className="font-outfit text-slate-400 text-[#EEE5FFBD]">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.{" "}
          </p>
          <img src={img10} alt="" />
        </div>
      </div>
    </div>
  );
}
