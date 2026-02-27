import ImgFeature1 from "../../images/feature-1.png";
import DashboardImg from "../../images/face_dashboard.png";
import Mobile from "../../images/mobile_face.png";
import Notification from "../../images/notification.png";
import Update from "../../images/update.png";
function MainFeatures() {
  return (
    <div className="mx-auto max-w-7xl py-20">
      <h3 className="text-4xl text-slate-300 font-medium mb-10">
        Flexible solutions for every Work model.
        <span className="text-slate-500">
          {" "}
          Grow your business with a comprehensive set of payments and financial
          tools⁠—⁠designed to work individually or together.
        </span>
      </h3>
      <div className="col-span-full mb-8 border-t-2 border-l border-violet-500 shadow-violet-500/20 shadow-2xl px-4 py-6 rounded-xl relative min-h-130 background-feature overflow-hidden hover:shadow-violet-500 transition-all duration-300 ease-in-out">
        <h2 className="text-slate-300 text-4xl font-semibold">
          Take control of your work — effortlessly.
        </h2>
        <div className="absolute left-0 bottom-5 w-170 h-auto drop-shadow-2xl drop-shadow-amber-50/50">
          <img
            src={DashboardImg}
            alt=""
            className="w-160 h-auto object-contain"
          />
        </div>
        <div className="w-150 h-auto absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <div className="aspect-auto w-150 h-full relative">
            <div className="w-100 h-100 rounded-full bg-violet-500/20 drop-shadow-2xl drop-shadow-violet-100 backdrop-blur-2xl -z-2 absolute left-1/2 -translate-x-1/2 top-4"></div>
            <img
              src={ImgFeature1}
              className="w-full h-full object-contain z-5 relative"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex-1 border-2 min-h-60 border-violet-500 rounded-xl shadow-2xl shadow-violet-500/20 px-6 py-4 background-feature-1 hover:shadow-violet-500 transition-all duration-300 ease-in-out">
          <h3 className="text-3xl text-slate-300 font-semibold capitalize tracking-tighter mb-6">
            track your work anywhere
          </h3>
          <div className="aspect-auto w-full h-full">
            <img
              src={Mobile}
              className="w-full h-full object-contain scale-110"
              alt="track your work anywhere"
            />
          </div>
        </div>
        <div className="flex-1 border-2 min-h-60 border-violet-500 rounded-xl shadow-2xl shadow-violet-500/20 px-6 py-4 background-feature-2 hover:shadow-violet-500 transition-all duration-300 ease-in-out">
          <h3 className="text-[26px] text-slate-300 font-semibold capitalize tracking-tighter mb-6">
            Smart AI-Powered Reminders
          </h3>
          <div className="aspect-auto w-full h-full">
            <img
              src={Notification}
              className="w-full h-full object-contain scale-120"
              alt="Smart AI-Powered Reminders"
            />
          </div>
        </div>
        <div className="flex-1 border-2 min-h-60 border-violet-500 rounded-xl shadow-2xl shadow-violet-500/20 px-6 py-4 background-feature-3 hover:shadow-violet-500 transition-all duration-300 ease-in-out">
          <h3 className="text-3xl text-slate-300 font-semibold capitalize tracking-tighter mb-6">
            Update in One Click
          </h3>
          <div className="aspect-auto w-full h-full">
            <img
              src={Update}
              className="w-full h-full object-contain scale-120"
              alt="Update in One Click"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeatures;
