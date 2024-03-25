"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import Link from "next/link";

export default function Header  () {
  const [isOpen, setisOpen] = useState(false);
  const [accordion, isaccordion] = useState(false);


  console.log("isOpen" , isOpen);

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  const handleAccordion = () => {
    isaccordion(!accordion);
  }

  return (
    <>
      <header className="border-b-[1px] border-[#D3DAE0]">
        <div className="mx-auto sm:pl-[29px] pl-[25px] sm:pr-[41px] pr-[25px] pt-[25.41px]">
          <nav>
            <ul className="flex justify-between items-center font-[500] pb-[15px]">
              <li className="pr-[20px] sm:border-r-[1px] border-r-[0] border-[#DDE3E9]">
                <Link href="">
                  <Image
                    src="/Group 80395 (1).png"
                    alt="Giving Society Image"
                    height={42.46}
                    width={240}
                    className="sm:block hidden"
                  />

                  <Image
                    src="/Group 80396.png"
                    alt="Giving Society Image"
                    height={46.46}
                    width={50}
                    className="sm:hidden block"
                  />
                </Link>
              </li>

              <div>
                <ul class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <li>
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28]"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px]"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px]"
                    >
                      Learn
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex items-baseline pr-[20px] border-r-[1px] border-[#DDE3E9] lg:flex hidden">
                <li className="mr-[25px] text-[16px] h-[44px] flex items-baseline">
                  <Link
                    href="#"
                    className="mt-[10px] text-[18px] font-[500] text-[#1A1A28] mr-[17px]"
                  >
                    Explore
                  </Link>

                  <Image
                    src="/Vector (1).png"
                    alt="Giving Society Image"
                    height={15}
                    width={15}
                    className="text-[#1A1A28]"
                  />
                </li>
              </div>

              <div className="flex lg:items-baseline items-center">
                <li>
                  <Link
                    href=""
                    className="w-[58px] h-[44px] mr-[21px] text-[18px] font-[500] text-[#1A1A28] lg:block hidden"
                  >
                    Log In
                  </Link>

                  <Link href="" className="sm:hidden block">
                    <button className="bg-[#8D6DFE] px-[25px] py-[10px] rounded-[10px] text-[#FFFFFF]">
                      Log In
                    </button>
                  </Link>
                </li>

                <li>
                  <Link href="" className="sm:block hidden">
                    <button className="bg-[#8D6DFE] px-[25px] py-[10px] rounded-[10px] text-[#FFFFFF]">
                      Sign up
                    </button>
                  </Link>
                </li>

                <li className="pl-[15px]">
                  {isOpen === false ? (
                    <Image
                      src="/menuicon.png"
                      alt="Giving Society Image"
                      height={37}
                      width={37}
                      className="lg:hidden block"
                      onClick={handleOpen}
                    />
                  ) : (
                    <Image
                      src="/cancelbutton.png"
                      alt="Giving Society Image"
                      height={37}
                      width={37}
                      className="lg:hidden block"
                      onClick={handleOpen}
                    />
                  )}
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>

      {
              isOpen === true ? 
              <div className="lg:hidden block px-[20px] py-[25px] leading-[43px]">
                <ul class="lg:hidden block justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <li className="ml-[26px]">
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28] max-w-[115px] max-h-[44px]"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li className="mt-[12px] ml-[26px]">
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28] mt-[6px] max-w-[115px] max-h-[44px]"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mt-[12px] ml-[26px]">
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28]"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mt-[12px] ml-[26px]">
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28]"
                    >
                      Learn
                    </Link>
                  </li>

                  <div className="flex justify-between items-baseline bg-gray-300 rounded-md">
                  <li className="ml-[26px]">
                    <Link
                      href=""
                      className="lg:mr-[6px] xl:mr-[25px] text-[18px] font-[500] text-[#1A1A28]"
                    >
                      Explore
                    </Link>
                  </li>
                  <button onClick={handleAccordion}>
                  <Image
                     src="/chevrolentbottom.png"
                     alt=""
                     height={15}
                     width={15}
                     className="mr-[17px] text-black"
                  />
                  </button>
                  </div>

                  {
                    accordion === true ?
                    <div className="pl-[50px] leading-[43px]">
                      <h6 className="text-[#1A1A28] text-[18px] font-[500]">Lorem Ipsum</h6>
                      <h6 className="text-[#1A1A28] text-[18px] font-[500]">Lorem Ipsum</h6>
                      <h6 className="text-[#1A1A28] text-[18px] font-[500]">Lorem Ipsum</h6>
                      </div>
                    : null
                  }

                  <div className="flex justify-between mt-[43px]">
                  <Image
                    src="/Group 80396.png"
                    alt="Giving Society Image"
                    height={46.46}
                    width={50}
                    className="sm:hidden block"
                  />

                  <h6 className="text-[#1A1A28] text-[18px] font-[500]">EN</h6>
                  </div>

                  

                  <button className="border-[1.5px] mt-[68px] border-[#7656E7] w-full rounded-[10px] text-[#8D6DFE]">
                     Log In
                    </button>

                    <button className="bg-[#8D6DFE] mt-[15px] rounded-[10px] w-full text-[#FFFFFF]">
                      Register
                    </button>

                
                </ul>
              </div>
              
              : null
            }
    </>
  );
};

