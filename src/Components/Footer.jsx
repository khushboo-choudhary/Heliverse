import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gradient-image text-slate-200 px-10 py-4 flex flex-col-reverse items-center md:flex-row justify-between ">
      <p className="font-sora text-xs">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <p className="flex space-x-5 font-outfit text-xs max-sm:mb-3">
        <span>Documentation</span>
        <span>Support</span>
      </p>
    </div>
  );
}
