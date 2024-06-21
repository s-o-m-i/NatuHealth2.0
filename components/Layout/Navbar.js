"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const [activePath, setActivePath] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setActivePath(router);
  }, [router]);

  const isLinkActive = (path) => {
    return activePath === path;
  };

  return (
    <div className="bg-white flex navbar pt-4 items-center justify-between text-black px-4 py-2 sm:py-4 w-full md:px-10 lg:px-40">
      <Link href="/">
        <h1 className="md:text-xl lg:text-3xl sm:text-4xl font-bold text-[#5A63FE]">
          Natu-Health
        </h1>
      </Link>
      <div className="flex justify-end items-center">
        <div className="links hidden sm:flex items-center md:gap-2 lg:gap-8 mr-6">
          <Link href="/">
            <div
              className={`lg:text-[16px] ${
                isLinkActive("/") ? "text-[#5A63FE]" : ""
              }`}
            >
              Find Care
            </div>
          </Link>
          <Link href="/about-us">
            <div
              className={`lg:text-[16px] ${
                isLinkActive("/about-us") ? "text-[#5A63FE]" : ""
              }`}
            >
              About Us
            </div>
          </Link>
          {/* <Link href="/our-approach"> */}
          <div
            className={`lg:text-[16px] ${
              isLinkActive("/our-approach") ? "text-[#5A63FE]" : ""
            }`}
          >
            Our Approach
          </div>
          {/* </Link> */}
        </div>
        <div className="cta relative flex items-center gap-2 sm:gap-3">
          <div onClick={() => setShowNav(!showNav)} className="hamburger">
            <svg
              className="sm:hidden block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {showNav && (
            <>
              <div className="links rounded-md w-52 duration-1000 transition-all ease-in-out top-8 -left-52 z-50 bg-white px-8 py-4 absolute sm:flex items-center md:gap-2 lg:gap-8 mr-6">
                <Link href="/">
                  <div
                  onClick={() => setShowNav(!showNav)}
                    className={`lg:text-[16px] ${
                      isLinkActive("/") ? "text-[#5A63FE]" : ""
                    } border-b-2 border-grey`}
                  >
                    Find Care
                  </div>
                </Link>
                <Link href="/about-us">
                  <div
                  onClick={() => setShowNav(!showNav)}
                    className={`lg:text-[16px] ${
                      isLinkActive("/about-us") ? "text-[#5A63FE]" : ""
                    } border-b-2 border-grey`}
                  >
                    About Us
                  </div>
                </Link>
                {/* <Link href="/our-approach"> */}
                <div
                onClick={() => setShowNav(!showNav)}
                  className={`lg:text-[16px] mb-2 ${
                    isLinkActive("/our-approach") ? "text-[#5A63FE]" : ""
                  } border-b-2 border-grey`}
                >
                  Our Approach
                </div>
                {/* </Link> */}
                <div className="flex-col flex ">
                  <button className="border rounded-3xl px-2 text-sm md:text-lg sm:px-5 py-1 sm:py-2 border-[#5A63FE] text-[#5A63FE]">
                    Sign in
                  </button>
                  <button className="bg-[#5A63FE] mt-2 text-white rounded-3xl px-2 py-2 text-sm md:text-lg sm:px-5 sm:py-2">
                    Sign Up
                  </button>
                </div>
              </div>
            </>
          )}
          <button className="sm:block hidden border rounded-3xl px-2 text-sm md:text-lg sm:px-5 sm:py-2 border-[#5A63FE] text-[#5A63FE]">
            Sign in
          </button>
          <button className="sm:block hidden bg-[#5A63FE] text-white rounded-3xl px-2 text-sm md:text-lg sm:px-5 sm:py-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
