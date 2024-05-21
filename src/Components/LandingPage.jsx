import React from 'react'
import img1 from "../assets/motionarteffect-img1.png"
import img2 from "../assets/motionarteffect-img2.png";
import img3 from "../assets/motionarteffect-img3.png";
import img4 from "../assets/motionarteffect-img4.png";


export default function LandingPage() {
    const images = [img1,img2,img3]
  return (
    <>
      <div className="w-11/12 mx-auto my-8 flex justify-between">
        <img src="/MotionArtEffect-logo.png" alt="logo" />
        <button className="bg-white text-black px-8 font-outfit text-lg py-3 rounded hover:bg-transparent border border-slate-300 hover:text-slate-200 transition-all hidden md:block">
          Purchase Now
        </button>
      </div>
      <div>
        <div className="pt-10 w-11/12 md:w-5/6 mx-auto md:flex space-y-5 md:space-y-0 text-center md:text-start">
          <div className="flex flex-col space-y-3">
            <h5 className="w-full md:w-[60%] text-transparent bg-clip-text bg-gradient-text text-2xl md:text-lg font-medium font-outfit">
              Transform Your Website
            </h5>
            <p className="text-slate-300 w-full md:w-[60%] text-xl md:text-lg font-outfit">
              With Motion Art Effect
            </p>
          </div>
          <div className="w-full md:w-7/12 mx-auto font-sora font-semibold ">
            <h2 className="text-4xl md:text-5xl text-slate-200 md:leading-[75px] leading-[55px]">
              Attract Your Visitors Attention With Colorful
            </h2>
            <h2 className="text-transparent text-4xl md:text-5xl my-3 bg-clip-text bg-gradient-text">
              Motion Art Effect
            </h2>
            <p className="font-outfit py-3 text-base text-[#EEE5FFBD]">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="my-32 w-10/12 mx-auto text-center">
          <div className="text-xl md:text-2xl text-slate-200 font-outfit text-[#EEE5FF]">
            <h4>Trusted by thousands of users around the world</h4>
          </div>

          <div className="overflow-hidden flex lg:gap-24 gap-10 pt-12 flex-wrap lg:justify-between justify-center">
            {images.map((img, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3">
                  <div>
                    <img src={img} alt="logo" />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <img src={img4} alt="5 star" />
                    <p className="font-sora text-start text-slate-400 text-base text-[#EEE5FFBD]">
                      <span className="font-bold text-[#EEE5FFBD]">4.5</span>{" "}
                      Score, 9 Reviews
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
