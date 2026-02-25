import Logo from "../../images/logo_white.png";
import LogoBlack from "../../images/logo_black.png";
import { useEffect, useState } from "react";
function Header() {
  const [white, setWhite] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [menuContent, setMenuContent] = useState("products");
  const openMenu = function () {
    setAnimate(true);
  };
  const closeMenu = function () {
    setMenuOpen(false);
  };
  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setAnimate(false);
      setMenuOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [animate]);
  return (
    <div className="w-full border-b border-(--border-color) pt-3">
      <div
        className="flex items-center justify-between  border-(--border-color) w-full h-18 mx-auto rounded-md max-w-7xl hover:bg-white relative z-5 transition-all duration-400 px-6 group"
        onMouseEnter={() => setWhite(true)}
        onMouseLeave={() => setWhite(false)}
      >
        <div className="flex items-center gap-12">
          <div className="w-35 h-15 aspect-auto">
            <img
              src={white ? LogoBlack : Logo}
              alt="WorkFlowAi"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <nav className="flex items-center gap-4 text-white group-hover:text-slate-700 duration-300 ease-out transition-all [&_button]:hover:cursor-pointer">
            <button
              className="flex text-sm items-baseline gap-2"
              onMouseEnter={() => {
                openMenu();
                setMenuContent("products");
              }}
            >
              Products
              {menuOpen && menuContent === "products" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            <button
              className="flex text-sm items-baseline gap-2"
              onMouseEnter={() => {
                openMenu();
                setMenuContent("solution");
              }}
            >
              Solution
              {menuOpen && menuContent === "solution" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            <button
              className="flex text-sm items-baseline gap-2"
              onMouseEnter={() => {
                openMenu();
                setMenuContent("developers");
              }}
            >
              Developers
              {menuOpen && menuContent === "developers" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-sm border border-white px-4 py-2 rounded-md cursor-pointer duration-600 transition-all group-hover:border-slate-200 hover:border-(--color-primary)">
            <span className="text-gradient">Sing in</span>
          </button>
          <button
            className="flex items-center text-sm gap-1 bg-(--color-primary) hover:bg-(--color-primary_hover) transition-all duration-500 text-slate-100 border border-(--color-primary) px-4 py-2 rounded-md cursor-pointer"
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            Contact us
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
        <div
          className={`absolute bg-white shadow-xl shadow-black/5 transition-all duration-500 top-full rounded-b-md left-0 w-full overflow-hidden ${menuOpen ? "max-h-120 opacity-100 visible pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
          onMouseLeave={closeMenu}
        >
          {menuContent === "products" && (
            <div className="grid grid-cols-5 gap-2 ">
              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Payments</h3>
                  <div className="absolute w-full h-px rounded-full top-7 bg-gradient-to-r from-purple-500 to-red-400" />
                </div>
                <ul className="flex flex-col gap-1 mt-5">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Payments
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Online payments
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Payment Links
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      No-code payments
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Manage Payments
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Merchant of record solution
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Checkout
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Prebuilt payment form
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Payment methods
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Access to 100+
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Terminal
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      In-person payments
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Link
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Accelerated checkout
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Revenue</h3>
                  <div className="absolute w-full h-px rounded-full top-7 bg-gradient-to-r from-purple-500 to-red-400" />
                </div>
                <ul className="flex flex-col gap-1 mt-5">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Billing
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Subscription management
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Usage-based billing
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Metered billing
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Invoicing
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      One-time or recurring
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Tax
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Sales tax & VAT automation
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Revenue Recognition
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Accounting automation
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Data Pipeline
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Data sync
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Money Management</h3>
                  <div className="absolute w-full h-px rounded-full top-7 bg-gradient-to-r from-purple-500 to-red-400" />
                </div>
                <ul className="flex flex-col gap-1 mt-5">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Financial Accounts
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Business finances
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Global Payouts
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Payouts to third parties
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Capital
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Business financing
                    </p>
                  </li>

                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Crypto
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Wallet, stablecoin issuing and card infrastructure
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">
                    Platforms and marketplaces
                  </h3>
                  <div className="absolute w-full h-px rounded-full top-7 bg-gradient-to-r from-purple-500 to-red-400" />
                </div>
                <ul className="flex flex-col gap-1 mt-5">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Connect
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Payments for platforms
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Capital for platforms
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Capital for platforms
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Financial Accounts for platforms
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Embedded financial services
                    </p>
                  </li>

                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Issuing
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Physical and virtual cards
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6 bg-slate-200 border-l border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">More</h3>
                  {/* <div className="absolute w-full h-px rounded-full top-7 bg-gradient-to-r from-purple-500 to-red-400" /> */}
                </div>
                <ul className="flex flex-col gap-1 mt-5">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Connect
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Payments for platforms
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Capital for platforms
                    </a>

                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Capital for platforms
                    </p>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Financial Accounts for platforms
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Embedded financial services
                    </p>
                  </li>

                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Issuing
                    </a>
                    <p className="text-sm text-stone-600 group-hover/item:text-stone-800">
                      Physical and virtual cards
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {menuContent === "solution" && (
            <div className="grid grid-cols-4 gap-2 ">
              <div className="flex-1 h-full px-6 py-6 border-r border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">By stage</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Enterprises
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Startups
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6 border-r border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">By use case</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Agentic commerce
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Crypto
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Ecommerce
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Embedded finance
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Finance automation
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Global businesses
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      In-app payments
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      In-app payments
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Marketplaces
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Platforms
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      SaaS
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">By industry</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      AI companies
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Creator economy
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Hospitality, travel, and leisure
                    </a>
                  </li>

                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Insurance
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Media and entertainment
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Nonprofits
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Retail
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6 bg-slate-200 border-l border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Ecosystem</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Partners
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Stripe App Marketplace
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {menuContent === "developers" && (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex-1 h-full px-6 py-6 border-r border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Documentation</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Doc
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      API reference
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Libraries and SDKs
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Stripe Apps
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-full px-6 py-6 border-r border-(--border-color)/10">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Guides</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Accept online payments
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Implement a prebuilt checkout
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Build a platform or marketplace
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Manage subscriptions
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Offer usage-based billing
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Issue stablecoin-backed cards
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-1 h-full px-6 py-6">
                <div className="relative w-full">
                  <h3 className="text-sm capitalize">Resources</h3>
                </div>
                <ul className="flex flex-col gap-0 mt-2">
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      App integrations
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href="#"
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Code samples
                    </a>
                  </li>
                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      Developer blog
                    </a>
                  </li>

                  <li className="group/item cursor-pointer p-1 rounded-lg transition-all duration-300 hover:bg-slate-50">
                    <a
                      href={"#"}
                      className="text-sm font-semibold text-violet-600 group-hover/item:text-violet-500 duration-300 transition-colors"
                    >
                      API status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
