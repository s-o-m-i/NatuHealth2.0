import Navbar from "@/components/Layout/Navbar";
import React from "react";

const Result = () => {
  return (
    <>
      <div className="home-container bg-[#F5F5F5] z-10 relative  w-full min-h-screen md:px-10  lg:px-40  px-10 px-2 text-white">
        <div className="roshni hidden sm:block -z-10 w-96 h-96  absolute  left-0 top-36"></div>
        <div className="result-cont py-10">
          <div className="flex items-center flex-col mt-12 justify-center text-center">
            <h1 className="text-3xl font-bold  text-[#484848]">
              Based on your needs and proximity to your location, we <br />
              recommend:
            </h1>
            <h3 className="font-bold mt-4 mb-5 text-[#5A63FE]"> Best Match:</h3>
          </div>

          <div className="result-card flex items-center justify-center">
            <div className="card rounded-xl sm:py-4 sm:px-7 px-2 py-2 bg-white  text-black flex items-center gap-5">
              <div className="left text-center">
                <img src="/Ellipse6.png" alt="" />
                <p className="text-sm font-bold text-[#484848]">Jane Gregorie</p>
                <p className="text-sm font-bold text-[#484848]"> M.S., L.Ac. FABORM</p>
                <p className="text-sm text-[#5A63FE] font-bold">Acupuncturist</p>
              </div>
              <div className="right">
                <p className="font-bold text-sm text-[#484848]">Acupuncture Denver</p>
                <div className="flex items-center">
                  <img src="/rating.png" alt="" />
                  <p className="text-sm">4.8(178)</p>
                </div>
                <p className="text-sm text-black">899 Logan St # 109, Denver, CO, 80203</p>
                <p className="text-sm text-[#5A63FE] font-bold">Distance: 7.68 mi</p>
                <div className="flex items-center gap-2  mt-2">
                  <img src="/email.png" alt="" />
                <p className="text-sm text-black">jane@acudenver.com</p>

                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img src="/phone.png" alt="" />
                  <p className="text-sm">303-929-9582</p>
                </div>
                <div className="flex justify-end">
                  <button className="text-sm mt-4 text-white  btn-bg-gradient rounded-3xl px-5 py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center  justify-center text-center">
            <h3 className="font-bold my-8 text-[#5A63FE]   "> Additional Options:</h3>
          </div>

          <div className="result-card grid gap-y-5 gap-x-4 sm:gap-y-0 sm:grid-cols-3">
            <div className="card  flex justify-center  ">
              <div className="box text-center w-60 sm:w-80 rounded-xl py-3 px-2 sm:py-4 sm:px-7 bg-white text-[#484848]">
                <div className="flex justify-center">
                  <img src="/card4.png" alt="" />

                </div>
                <p className="font-bold">Jane Gregorie</p>
                <p className="font-bold"> M.S., L.Ac. FABORM</p>
                <p className="text-sm text-[#5A63FE] font-bold">Acupuncturist</p>
                <p className="font-bold">Acupuncture Denver</p>
                <div className="flex items-center justify-center">
                  <img src="/rating.png" alt="" />
                  <p>4.8(178)</p>
                </div>
                <p>899 Logan St # 109, Denver, CO, 80203</p>
                <p className="text-[#5A63FE] font-bold">Distance: 7.68 mi</p>
                <div className="flex items-center gap-2 justify-center">
                  <img src="/email.png" alt="" />
                  <p>jane@acudenver.com</p>
                </div>
                <div className="mt-2 flex items-center gap-2 justify-center">
                  <img src="/phone.png" alt="" />
                  <p>303-929-9582</p>
                </div>
                <div className="flex justify-center">
                  <button className=" mt-4 text-white  btn-bg-gradient rounded-3xl px-5 py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card  flex justify-center  ">
              <div className="box text-center w-60 sm:w-80 rounded-xl py-3 px-2 sm:py-4 sm:px-7 bg-white text-[#484848]">
                <div className="flex justify-center">
                  <img src="/card2.png" alt="" />

                </div>
                <p className="font-bold">Jane Gregorie</p>
                <p className="font-bold"> M.S., L.Ac. FABORM</p>
                <p className="text-sm text-[#5A63FE] font-bold">Acupuncturist</p>
                <p className="font-bold">Acupuncture Denver</p>
                <div className="flex items-center justify-center">
                  <img src="/rating.png" alt="" />
                  <p>4.8(178)</p>
                </div>
                <p>899 Logan St # 109, Denver, CO, 80203</p>
                <p className="text-[#5A63FE] font-bold">Distance: 7.68 mi</p>
                <div className="flex items-center gap-2 justify-center">
                  <img src="/email.png" alt="" />
                  <p>jane@acudenver.com</p>
                </div>
                <div className="mt-2 flex items-center gap-2 justify-center">
                  <img src="/phone.png" alt="" />
                  <p>303-929-9582</p>
                </div>
                <div className="flex justify-center">
                  <button className=" mt-4 text-white  btn-bg-gradient rounded-3xl px-5 py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card  flex justify-center  ">
              <div className="box text-center w-60 sm:w-80 rounded-xl py-3 px-2 sm:py-4 sm:px-7 bg-white text-[#484848]">
                <div className="flex justify-center">
                  <img src="/card3.png" alt="" />

                </div>
                <p className="font-bold">Jane Gregorie</p>
                <p className="font-bold"> M.S., L.Ac. FABORM</p>
                <p className="text-sm text-[#5A63FE] font-bold">Acupuncturist</p>
                <p className="font-bold">Acupuncture Denver</p>
                <div className="flex items-center justify-center">
                  <img src="/rating.png" alt="" />
                  <p>4.8(178)</p>
                </div>
                <p>899 Logan St # 109, Denver, CO, 80203</p>
                <p className="text-[#5A63FE] font-bold">Distance: 7.68 mi</p>
                <div className="flex items-center gap-2 justify-center">
                  <img src="/email.png" alt="" />
                  <p>jane@acudenver.com</p>
                </div>
                <div className="mt-2 flex items-center gap-2 justify-center">
                  <img src="/phone.png" alt="" />
                  <p>303-929-9582</p>
                </div>
                <div className="flex justify-center">
                  <button className=" mt-4 text-white  btn-bg-gradient rounded-3xl px-5 py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Result;
