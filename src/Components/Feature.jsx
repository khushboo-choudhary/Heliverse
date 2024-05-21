import React from 'react'
import img6 from "../assets/motionarteffect-img6.png";
import img7 from "../assets/motionarteffect-img7.png";
import img9 from "../assets/motionarteffect-img9.png";

export default function Feature() {
    const details = [
  {
    id: 1,
    img: img9,
    heading: "Light Weight",
    description: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    id: 2,
    img: img6,
    heading: "100% Responsive",
    description: "Create a consistent visual experience across all devices.",
  },
  {
    id: 3,
    img: img7,
    heading: "User Friendly Interface",
    description:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];

  return (
    <>
      <div className="text-center max-w-2xl mx-auto my-20 px-5">
        <h2 className="font-sora max-w-2xl text-2xl md:text-4xl font-medium text-[#EEE5FF]">
          An All-Round Plugin With Powerful Features
        </h2>
        <p className="font-outfit text-slate-400 text-lg mt-5 text-[#EEE5FFBD]">
          Whether you{"'"}re a seasoned web designer or just starting out,
          Motion Art for Elementor seamlessly integrates with the Elementor
          platform, providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="w-11/12 mx-auto md:my-20 my-5">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-y-0">
          {details.map((data) => (
            <div
              key={data.id}
              className="flex-1 bg-gradient rounded-3xl px-4 py-6 border border-slate-800 space-x-6 space-y-5"
            >
              <img src={data.img} alt={data.heading} />
              <h4 className="text-2xl text-slate-200 font-sora mx-6">
                {data.heading}
              </h4>
              <p className="text-lg text-slate-400 font-outfit mx-6 text-[#EEE5FFBD]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
