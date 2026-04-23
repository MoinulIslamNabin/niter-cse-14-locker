import React from "react";

export default function Hero() {
  return (
    <div className="hero pt-20 bg-[#090d12] min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="font-space-mono text-[10px] tracking-[3px] uppercase text-cyan-400 border border-cyan-400/30 px-4 py-1.5 mb-8 bg-cyan-400/5 animate-fadeDown">
            CSE Department · Batch 14 Locker v2.0
          </div>
          <div className="flex justify-center">
            <h1 className=" text-[clamp(48px,8vw,88px)] font-extrabold leading-none tracking-[-2px] mb-2 animate-fadeDown">
              Your <br />
              <span className="text-cyan-400 relative inline-block">
                Academic
                <span className="absolute left-0 right-0 bottom-1 h-0.75 bg-linear-to-r from-cyan-400 to-transparent"></span>
              </span>
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(226,234,244,0.15)] tracking-wider">
                Command Center
              </span>
            </h1>
          </div>
          <p className="py-10 font-semibold text-xl text-white/70">
            Everything you need — class routines, teacher directories, CGPA
            tools, study planners and more. All in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
