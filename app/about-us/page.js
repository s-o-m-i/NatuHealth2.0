"use client";
import React from "react";

const Aboutus = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>

      <div className="working">
        <h1 className="text-4xl sm:text-5xl font-bold text-center natu-text-blue-color mt-10" >About Us</h1>
        <div className="mt-5 ">
          <p className="text-center text-black">
          Our Mission
          </p>
        </div>
      </div>
      <div className="home-container z-10 relative w-full px-2 md:px-10 lg:px-40" >
        <div className="mt-20 text-black info-section grid lg:grid-cols-2 ">
          <div className="info">
            <h1 className="text-2xl sm:text-4xl home-big-text-color font-bold leading-snug ">
            It should be easy to find the care <br /> you want and can trust.
            </h1>
            <p className="text-md sm:text-lg font-normal mt-10 ">
            Natu is on a mission to create a platform that empowers <br /> individuals to take control of their health by connecting them with <br /> reputable medical practitioners outside of the traditional system. <br /> Every provider listed on Natu goes through a comprehensive <br /> vetting process to ensure trust and quality. 
            </p>
            <p className="text-md sm:text-lg font-normal mt-10 ">
            Providers listed on Natu include MDs, Osteopaths, Chiropractors, <br /> Acupuncturists, Physical Therapists and more 
            </p>
          </div>
          <div className="info-img z-10 relative mt-5 lg:mt-0 flex items-center lg:justify-end">
            <div className="roshni hidden lg:block -z-10 w-96 h-96  absolute  right-0 top-96"></div>
            <img src="/Rectangle-2.png" alt="About Us" />
          </div>
        </div>

      </div>


    </>
  );
};

export default Aboutus;
