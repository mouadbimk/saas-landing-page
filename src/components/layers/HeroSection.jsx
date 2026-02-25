import { useState } from "react";
import HeroImage from "../../images/mainImage.png";
function HeroSection() {
  const [contactHover, setContactHover] = useState(false);

  return (
    <div className="w-full min-h-120 mt-15 relative">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-1 px-5">
          <h2 className="text-4xl font-bold  text-white mb-6 md:text-6xl">
            Build <span className="overlay ">Faster</span>.<br /> Scale{" "}
            <span className="overlay green">Smarter</span>. Powered by AI.
          </h2>
          <p className="text-[16px] text-slate-400 mb-6">
            From idea to execution, FlowAI gives your team the tools to automate
            workflows, track performance, and move with confidence.
          </p>
          <div className="flex flex-col md:flex-row items-center md:gap-1 mt-6 w-full px-3 gap-3 md:px-0 md:w-120">
            <button className=" text-slate-400 text-base border hover:flex-2 border-white/30 truncate w-full md:flex-1 px-4 py-2 rounded-md cursor-pointer duration-600 transition-all group-hover:border-slate-200 hover:border-(--color-primary) hover:text-(--color-primary)">
              View Live Demo
            </button>
            <button
              className="flex items-center truncate justify-center w-full md:flex-1 text-base gap-1 bg-(--color-primary) hover:bg-(--color-primary_hover) transition-all duration-500 text-slate-100 border border-(--color-primary) px-4 py-2 rounded-md cursor-pointer hover:flex-2"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              Get Started Free
              {contactHover ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="size-6 h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="size-6 h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 relative ">
          <div className="w-100 h-100 rounded-full background-image top-5 right-5 absolute " />
          <img
            src={HeroImage}
            alt="Dashboard preview"
            className="w-full h-auto object-containe drop-shadow-2xl drop-shadow-slate-600"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
