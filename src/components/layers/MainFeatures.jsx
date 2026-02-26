import ImgFeature1 from "../../images/feature-1.png";
// import DashboardImg from "../../images";
function MainFeatures() {
  return (
    <div className="mx-auto max-w-7xl py-20">
      <h3 className="text-4xl text-slate-300 font-medium mb-6">
        Flexible solutions for every Work model.
        <span className="text-slate-500">
          {" "}
          Grow your business with a comprehensive set of payments and financial
          tools⁠—⁠designed to work individually or together.
        </span>
      </h3>
      <div className="grid grid-cols-3">
        <div className="col-span-full border border-slate-200/40 shadow-2xl px-4 py-6 rounded-xl relative min-h-130 background-feature">
          <h2 className="text-slate-300 text-4xl font-semibold">
            Take control of your work — effortlessly.
          </h2>
          <div className="absolute left-0 bottom-5 w-150 h-full">
            <img
              // src={DashboardImg}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-150 h-auto absolute right-0 top-0 z-10">
            <div className="aspect-auto w-150 h-full relative">
              <div className="w-100 h-100 rounded-full bg-violet-500/20 drop-shadow-2xl drop-shadow-violet-100 backdrop-blur-2xl -z-2 absolute left-1/2 -translate-x-1/2 top-4 "></div>
              <img
                src={ImgFeature1}
                className="w-full h-full object-contain z-5 relative"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeatures;
