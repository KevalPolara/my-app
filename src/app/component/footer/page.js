import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="bg-[#171326] py-[56px] sm:px-[75px] px-[25px]">
        <div className="flex flex-row flex-wrap items-start justify-between">
          <div className="sm:border-b-0 border-b-[2px] border-b-white pb-[27px]">
            <Image
              src="/givingsocietywhite.png"
              alt="Giving Society Image"
              height={68}
              width={430}
            />
          </div>

          <div className="sm:pt-0 pt-[40px]">
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  info@givingsociety.com
                </Link>
              </li>

              <li className="mt-[10px]">
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  (555) 555-5555
                </Link>
              </li>
            </ul>
          </div>

          <div className="pr-[119px] sm:pt-0 pt-[40px]">
            <div className="flex gap-x-[18px]">
              <Image
                src="/ant-design_facebook-filled.png"
                alt="Giving Society Image"
                height={33}
                width={33}
              />

              <Image
                src="/ant-design_twitter-square-filled.png"
                alt="Giving Society Image"
                height={33}
                width={33}
                className="bg-contain"
              />

              <Image
                src="/ant-design_instagram-filled.png"
                alt="Giving Society Image"
                height={33}
                width={33}
                className="bg-contain"
              />

              <Image
                src="/akar-icons_linkedin-box-fill.png"
                alt="Giving Society Image"
                height={33}
                width={33}
                className="bg-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-x-0 gap-x-[30px] justify-between">
          <div className="sm:block hidden"></div>
          <div className="flex sm:justify-center justify-start mt-[76px] sm:pl-[60px] pl-0px">
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  About Us
                </Link>
              </li>

              <li className="mt-[10px]">
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  Services
                </Link>
              </li>

              <li className="mt-[10px]">
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  Case Studies
                </Link>
              </li>

              <li className="mt-[10px]">
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  Learn
                </Link>
              </li>

              <li className="mt-[10px]">
                <Link
                  href="#"
                  className="text-[16px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-[74px] text-center">
            <li className="list-none">
              <Link
                href="#"
                className="text-[16px] sm:ml-[60px] ml-[10px] text-[#FFFFFF]  hover:border-b-[2px] border-b-white"
              >
                Privacy Policy
              </Link>
            </li>

            <li className="list-none mt-[10px]">
              <Link
                href="#"
                className="text-[16px] text-[#FFFFFF] hover:border-b-[2px] border-b-white"
              >
                Terms
              </Link>
            </li>

            <li className="list-none mt-[10px]">
              <Link
                href="#"
                className="text-[16px] text-[#FFFFFF] hover:border-b-[2px] border-b-white"
              >
                Legal
              </Link>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
