import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="content relative text-center flex items-center flex-col  sm:justify-center bg-white w-full text-white bg-gradient-to-b from-[#6D75FE] to-[#4D56FE] h-[500px] position-rlative">
      <h1 className="mt-10 leading-snug sm:l  eading-snug text-4xl sm:text-6xl font-bold">
        A new way to find care
      </h1>
      <p className=" sm:text-xl sm:mt-10  ">
        Find evidence-based alternative and nontraditional <br className="hidden sm:block" />
        medical care
      </p>

      <Link href={"/getstarted"}>
        <button className="text-[16px] flex items-center justify-between gap-5 bg-white px-4 sm:px-8 py-4 rounded-full mt-5 text-black">
          Personalized recommendations
          <img src="/rightarrow.png" alt="" />
        </button>
      </Link>






     










      {/* Search Bar */}
      <div
        className=" searchbar   bg-white px-8 py-4  mt-5 -mb-10 sm:-mb-0 text-black w-full mx-auto sm:w-2/4 sm:px-10 sm:py-5 sm:mt-10 sm:rounded-3xl sm:gap-10 absolute left-2/4 -bottom-1/3"
        style={{
          position: "absolute",
          left: "50%",
          zIndex: 9999,
          bottom: "-20%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className=" sm:flex   w-full">
          <div
            className="flex flex-col text-left w-full sm:w-1/3 pr-8 sm:pr-16
                        sm:border-r-2 border-[#9D9D9D] pr-8 sm:pr-16">
            <label className="text-[#9D9D9D] mb-3" htmlFor="search">
              Search
            </label>
            <div className="flex items-center gap-3">
              <img src="/search.png" alt="" />
              <input
                type="text"
                placeholder="Condition, doctor, treatment…"
                className="w-full text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Second Column: Location Input */}
          <div className="flex mt-1  sm:mt-0 flex-col text-left w-full sm:w-1/3 pr-8 sm:pr-16  sm:ml-6 ">
            <label className="text-[#9D9D9D] mb-3" htmlFor="location">
              Location
            </label>
            <div className="flex gap-3">
              <img src="/location.png" alt="" />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Third Column: Search Button */}
          <div className="w-full sm:w-1/3 flex items-center justify-end gap-5">
            <button className="bg-[#5A63FE] w-full mt-2 text-white sm:px-6 px-2 py-1 sm:py-3 border rounded-2xl text-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* centered left images  */}
      <div className="hidden sm:flex absolute left-0 top-[25%] transform -translate-y-1/2">
        <img
          src="/hero-section/left-one.png"
          alt=""
          className="sm:mr-10 absolute "
        />
        <img src="/hero-section/left-two.png" alt="" />
      </div>

      {/* centered right images  */}
      <div className="hidden sm:flex absolute right-0 top-[25%] transform -translate-y-1/2">
        <img
          src="/hero-section/right-one.png"
          alt=""
          className="sm:mr-10 absolute "
        />
        <img src="/hero-section/right-two.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
