"use client";
import HeroSection from "@/components/Shared/HeroSection";
import Link from "next/link";
import React from "react";

const Home = () => {
  const [show, setShow] = React.useState(false);
  const [showOne, setShowOne] = React.useState(false);
  const [showTwo, setShowTwo] = React.useState(false);
  const [showThree, setShowThree] = React.useState(false);
  const [showFour, setShowFour] = React.useState(false);
  const [showFive, setShowFive] = React.useState(false);
  const handleFaqClick = () => {
    setShow(!show);
  };
  return (
    <>
      <HeroSection />

      <div className="working">
        <h1 className="text-4xl sm:text-5xl font-bold text-center natu-text-blue-color" style={{
          marginTop: "120px"
        }}>Diverse Practitioner Network</h1>
        <div className="mt-5 ">
          <p className="text-center text-black">
            More options. Easy access
          </p>
        </div>  
      </div>
      <div className="home-container z-10 relative w-full  px-2 md:px-10 lg:px-40" >
        <div className="mt-20 text-black info-section grid lg:grid-cols-2 ">
          <div className="info">
            <h1 className="text-2xl text-justify sm:text-left sm:text-4xl home-big-text-color font-bold leading-snug ">
              Access a diverse network of practitioners helps people find alternative and cutting edge therapies to achieve a healthier and  more fulfilling life
            </h1>
            <p className="text-md sm:text-lg font-normal mt-10 ">
              Natu’s responsive approach to care supports people across a wide range of <br /> needs, interests and goals. Our personalized options are backed up by a <br /> practitioner network with varying clinical expertise and modalities to help make <br /> access to care easier than ever.
            </p>
          </div>
          <div className="info-img z-10 relative mt-5 lg:mt-0 flex items-center lg:justify-end">
            <div className="roshni hidden lg:block -z-10 w-96 h-96  absolute  right-0 top-96"></div>
            <img src="/doctors.jpg" alt="Doctors" />
          </div>
        </div>

      </div>


    </>
  );
};

export default Home;
