"use client";

import { useState } from "react";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Link from "next/link";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const progressWidth = (currentStep - 1) * 20; // Assuming each step contributes 50% to progress

  const nextStep = () => {
    if (currentStep === 6) {
      router.push("/result");
    }
    setCurrentStep((prevStep) => (prevStep < 7 ? prevStep + 1 : prevStep));
  };
  const previousStep = () => {
    // if(currentStep === 6){
    //   router.push('/result')
    // }
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <>
      <div className="home-container z-10 relative bg-[#F5F5F5] w-full  lg:px-40 text-white">
        <div className="roshni hidden sm:block -z-10 w-96 h-96  absolute  left-0 top-36"></div>
        <div className="card-container mt-12 mb-24 flex items-center justify-center">
          <div className="selection-box w-10/12 rounded-md bg-white sm:py-8 py-2 px-2 sm:px-12 text-black">
            {/* Progress bar */}
            <div className="w-full mb-5 rounded-full h-3.5 bg-[#e5e8ef]">
              <div
                className="btn-bg-gradient h-3.5 rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <h1 className="text-[25px] sm:text-4xl leading-snug font-medium">
              {currentStep === 1
                ? "What are you looking for help with? "
                : currentStep === 2
                ? "What is your sex? "
                : currentStep === 3
                ? "What type of care are you looking for?"
                : currentStep === 4
                ? "Digging a little deeper, Are you looking for care for any of the following?"
                : currentStep === 5
                ? "What are you looking to explore?"
                : currentStep === 6
                ? "How long have you experienced your symptoms?"
                : ""}
            </h1>
            {/* Step buttons */}
            {currentStep === 1 && <Step1 nextStep={nextStep} />}

            {currentStep === 2 && <Step2 nextStep={nextStep} />}

            {currentStep === 3 && <Step3 nextStep={nextStep} />}
            {currentStep === 4 && <Step4 nextStep={nextStep} />}
            {currentStep === 5 && <Step5 nextStep={nextStep} />}
            {currentStep === 6 && <Step6 nextStep={nextStep} />}

            <div className="md:flex items-center justify-end mt-5">
              {/* <button
                onClick={previousStep}
                className="bg-[#27C100]  w-full md:w-auto text-center  py-2 sm:py-4  justify-center flex items-center   gap-2 px-8 sm:px-10 rounded-full text-white"
              >
                <img
                  className="rotate-180"
                  src="/white-righ-arrow.png"
                  alt=""
                />
                Back
              </button> */}
              {currentStep < 6 ? (
                <button
                  onClick={nextStep}
                  className="bg-[#27C100] mt-2 w-full md:w-auto text-center  py-2 sm:py-4  justify-center flex items-center   gap-2 px-8 sm:px-10 rounded-full text-white"
                >
                  Next
                  <img src="/white-righ-arrow.png" alt="" />
                </button>
              ) : (
                <Link href="/result">
                  <button className="bg-[#27C100] mt-2 w-full md:w-auto py-2 sm:py-4 justify-center flex items-center  gap-2  px-10 rounded-full text-white">
                    Submit
                    <img src="/white-righ-arrow.png" alt="" />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
