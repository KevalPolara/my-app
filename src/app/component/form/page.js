import React from "react";
import Image from "next/image";

export default function Form() {
  return (
    <div>
      <section>
        <form className="sm:mt-[100px] mt-[80px]">
          <div className="relative sm:pl-0 pl-[10px] sm:pr-0 pr-[10px]">
            <div className="mx-auto border-[1.5px] border-[#BFBFBF] max-w-[818px] rounded-[15px] sm:pt-[50px] pt-[30px] pb-[29px] sm:px-[46px] px-[20px]">
              <p className="text-[#171326] pb-[43px] border-b-[1.5px] border-b-[#BFBFBF] sm:text-[64px] text-[40px] font-[600]">
                <div className="flex sm:justify-start justify-between items-center">
                  <h2 className="sm:text-[64px] text-[35px]">
                    <span className="flex sm:flex-row flex-row-reverse items-center">
                      <span>Begin Your</span>
                      <Image
                        src="/Vector (3).png"
                        alt="Giving Society Image"
                        height={38}
                        width={37}
                        className="inline ml-[10px]"
                      />
                    </span>
                    Giving Journey
                  </h2>
                </div>
              </p>

              <div className="flex sm:flex-row flex-col mt-[43px] gap-x-[34px]">
                <div className="sm:w-[50%] w-[100%]">
                  <label className="font-[400] text-[20px] text-[#171326]">
                    Full Name
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="block border-[1px] w-[100%] border-[#A9A9A9] outline-none rounded-[15px] py-[10px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px]  text-[18px]"
                    />
                  </div>
                </div>

                <div className="sm:w-[50%] w-[100%]">
                  <label className="font-[400] text-[20px] text-[#171326] ">
                    Location
                  </label>

                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Country"
                      className="block w-[100%] border-[1px] border-[#A9A9A9] outline-none rounded-[15px] py-[15px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px] placeholder-[12px] text-[10px]"
                    />

                    <span className="absolute text-[#A9A9A9] sm:bottom-0 bottom-[18px] left-[25px]">
                      Select Your Location
                    </span>

                    <Image
                      src="/Vector (8).png"
                      alt=""
                      height={15}
                      width={15}
                      className="absolute right-[20px] mt-[15px] sm:block hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col mt-[43px] gap-x-[34px] border-b-[1.5px] pb-[47px] border-b-[#BFBFBF]">
                <div className="sm:w-[50%] w-[100%]">
                  <div>
                    <label className="font-[400] text-[20px] text-[#171326]">
                      Organization
                    </label>

                    <input
                      type="text"
                      placeholder="Organization Name"
                      className="block w-[100%] border-[1px] border-[#A9A9A9] outline-none rounded-[15px] py-[10px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px] text-[18px]"
                    />
                  </div>
                </div>

                <div className="sm:w-[50%] w-[100%]">
                  <div>
                    <label className="font-[400] text-[20px] text-[#171326]">
                      Zip Code
                    </label>

                    <input
                      type="text"
                      placeholder="Zip code"
                      className="block w-[100%] border-[1px] border-[#A9A9A9] outline-none rounded-[15px] py-[10px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px] text-[18px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col mt-[43px] gap-x-[34px]">
                <div className="sm:w-[50%] w-[100%]">
                  <div>
                    <label className="font-[400] text-[20px] text-[#171326]">
                      Email
                    </label>

                    <input
                      type="text"
                      placeholder="Youremail@.example.com"
                      className="block w-[100%] border-[1px] border-[#A9A9A9] outline-none rounded-[15px] py-[10px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px] text-[18px]"
                    />
                  </div>
                </div>

                <div className="sm:w-[50%] w-[100%]">
                  <div>
                    <label className="font-[400] text-[20px] text-[#171326]">
                      Phone
                    </label>

                    <input
                      type="text"
                      placeholder="(111) 111-1111"
                      className="block w-[100%] border-[1px] border-[#A9A9A9] outline-none rounded-[15px] py-[10px] px-[24px] mt-[15px] sm:mb-[0px] mb-[20px] text-[18px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <label className="text-[#171326] text-[20px]">Category</label>
                <div className="relative w-[100%]">
                  <input
                    type="text"
                    className="flex justify-between items-center border-[1px] outline-none border-[#A9A9A9] rounded-[15px] py-[10px] px-[24px] mt-[15px] text-[18px] w-[100%]"
                    placeholder="Select Category"
                  />

                  <Image
                    src="/Vector (8).png"
                    alt=""
                    height={15}
                    width={15}
                    className="absolute top-0 right-[50px] top-[20px] sm:block hidden"
                  />
                </div>
              </div>

              <div className="sm:block flex sm:justify-start justify-between items-end">
                <button className="bg-[#8D6DFE] px-[49px] py-[10px] rounded-[10px] text-[#FFFFFF] mt-[40px]">
                  Submit
                </button>

                <Image
                  src="/Group 80396.png"
                  alt="Giving Society Image"
                  height={41}
                  width={44}
                  className="sm:hidden block"
                />
              </div>
              <div className="flex mt-[30px] justify-between">
                <div className="font-[300] text-[11px] text-[#1A1A28]">
                  <p>
                    By proceeding, you agree to our
                    <span className="border-b-[0.5px] mx-[4px] border-[#000000]">
                      Terms of Use
                    </span>
                    And Confirm
                  </p>
                  you have read our
                  <p className="inline border-b-[0.5px] mx-[4px] border-[#000000]">
                    Privacy and Cookie Statement.
                  </p>
                </div>

                <Image
                  src="/Group 80396.png"
                  alt="Giving Society Image"
                  height={51}
                  width={54}
                  className="sm:block hidden"
                />
              </div>
            </div>

            <div className="sm:absolute bottom-[28px] right-0 mr-[20px] sm:block hidden">
              <Image
                src="/rectangle (1).png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="block ml-[10px]"
              />

              <Image
                src="/rectangle (2).png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="block ml-[10px] mt-[10px]"
              />

              <Image
                src="/circle.png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="block ml-[10px] mt-[10px]"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
