import React from "react";
import Image from "next/image";

const Givingsocietystories = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="relative">
          <Image
            src="/smilygirl.png"
            alt="This is a smilygirl Releted Image"
            height={721}
            width={673}
            className="w-full"
          />

          <div className="flex flex-wrap justify-between absolute bottom-[50px] w-[100%] px-[46px]">
            <div className="text-white xl:text-[16px] text-[14px]">
              <p>“Shanice Fleming found renewed passion and a sense of</p>

              <p>purpose when she decided to start her own business as a...”</p>
            </div>

            <div className="flex gap-5 items-center">
              <Image
                src="/arrowback.png"
                alt="This is a arrowback Releted Image"
                height={37}
                width={37}
              />

              <Image
                src="/arrowforward.png"
                alt="This is a arrowback Releted Image"
                height={37}
                width={37}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between xl:px-[98px] px-[34px] xl:py-[147px] py-[50px]">
          <div className="max-w-[501px] lg:mx-0 mx-auto">
            <h2 className="sm:text-[64px] leading-[70px] text-[40px] sm:mt-0 mt-[40px] text-[#171326] font-[600]">
              <p>GivingSociety </p>

              <p className="flex gap-x-[20px] items-center">Stories</p>
            </h2>

            <p className="max-w-[424px] sm:text-[16px] text-[16px] mt-[50px] max-w-[424px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-[70px]">
              <button className="w-[260px] h-[40px] rounded-[10px] bg-[#8D6DFE] font-[500] px-[10px] py-[9px] text-[16px] text-[#ffffff]">
                Read Giving Society Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Givingsocietystories;
