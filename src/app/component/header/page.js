"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import Link from "next/link";

export default function Header  () {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

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
                <ul className="lg:flex hidden">
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
                  {isOpen === true ? (
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
    </>
  );
};

