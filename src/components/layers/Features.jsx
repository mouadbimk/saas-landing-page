import { useEffect, useRef, useState } from "react";

function Features() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  });
  return (
    <div className="max-w-7xl mx-auto px-10" ref={sectionRef}>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 flex items-center flex-col text-center transition-all z-20 cursor-pointer duration-700 hover:-translate-y-1 hover:bg-slate-800/40 py-4 rounded-xl">
          <div className="w-15 h-15 flex items-center justify-center backdrop-blur-2xl relative drop-shadow-2xl drop-shadow-violet-800 mb-6 rounded-full bg-slate-700/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-violet-500 w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </div>
          <h3 className="text-slate-300 text-base font-medium capitalize mb-6">
            Easy Automation
          </h3>
          <p className="text-sm text-slate-500">
            Create powerful workflows in minutes without writing complex code.
            Drag, connect, and launch instantly.
          </p>
        </div>
        <div className="flex-1 flex items-center flex-col text-center transition-all z-20 cursor-pointer duration-700 hover:-translate-y-1 hover:bg-slate-800/40 py-4 rounded-xl">
          <div className="w-15 h-15 flex items-center justify-center backdrop-blur-2xl relative drop-shadow-2xl drop-shadow-violet-800 mb-6 rounded-full bg-slate-700/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-violet-500 w-8 h-8"
            >
              <path d="M12 18V5" />
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
              <path d="M18 18a4 4 0 0 0 2-7.464" />
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
              <path d="M6 18a4 4 0 0 1-2-7.464" />
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
            </svg>
          </div>
          <h3 className="text-slate-300 text-base font-medium capitalize mb-6">
            AI-Powered Intelligence
          </h3>
          <p className="text-sm text-slate-500">
            Let AI analyze data, trigger actions, and optimize your processes
            automatically in real time.
          </p>
        </div>
        <div className="flex-1 flex items-center flex-col text-center transition-all z-20 cursor-pointer duration-700 hover:-translate-y-1 hover:bg-slate-800/40 py-4 rounded-xl">
          <div className="w-15 h-15 flex items-center justify-center backdrop-blur-2xl relative drop-shadow-2xl drop-shadow-violet-800 mb-6 rounded-full bg-slate-700/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-violet-500 w-8 h-8"
            >
              <path d="m15 15 6 6" />
              <path d="m15 9 6-6" />
              <path d="M21 16v5h-5" />
              <path d="M21 8V3h-5" />
              <path d="M3 16v5h5" />
              <path d="m3 21 6-6" />
              <path d="M3 8V3h5" />
              <path d="M9 9 3 3" />
            </svg>
          </div>
          <h3 className="text-slate-300 text-base font-medium capitalize mb-6">
            Built to Scale
          </h3>
          <p className="text-sm text-slate-500">
            From startups to enterprises, handle thousands of workflows with
            secure and reliable performance.
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-400 h-1 rounded-full relative">
        <span
          className={`transition-all duration-4000 delay-800 ease-in-out h-full bg-violet-700 drop-shadow-2xl drop-shadow-violet-400 rounded-full absolute top-0 left-0 ${visible ? "w-full" : "w-0"}`}
        ></span>
      </div>
    </div>
  );
}

export default Features;
