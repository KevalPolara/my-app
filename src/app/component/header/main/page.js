"use client";

import React, { useState } from "react";
import Image from "next/image";

const Main = () => {
  return (
    <main>
      <section>
        <div className="relative">
          <div>
            <Image
              src="/Rectangle 792.png"
              alt="Giving Society Image"
              height={0}
              width={0}
              className="text-[#eaeaee] w-full sm:h-[673px] h-[725px]"
            />
          </div>

          <div className="absolute sm:top-[136px] top-[63px] flex lg:flex-row flex-col-reverse lg:pl-[100px]">
            <div className=" hover:bg-[#8D6DFE] w-[37px] h-[38px] border-[4px] border-[#171326] hover:border-[#8D6DFE] rounded-md xl:block hidden"></div>

            <div className="basic-3/7 max-w-[335px] h-[242px] font-[400] text-[16px] text-[#171326] max-width-[317px] text-center lg:mx-0 mx-auto sm:mt-0 mt-[40px]">
              <p>
                At GivingSociety, we firmly believe that generosity has the
                power to change lives and create a better world.
              </p>

              <br />

              <p>
                Join us on this incredible journey of giving and together, let's
                make a lasting impact, one act of kindness at a time.
              </p>

              <br />

              <p>
                Together, we can create a society where generosity is
                celebrated, and every individual has the opportunity to thrive.
              </p>
            </div>

            <div className="basic-4/7 pl-[20px] sm:leading-[82px] leading-[60px] xl:w-[726px] :w-[318px]">
              <h1 className="xl:text-[78px] text-[50px] text-[#171326] font-[600] md:text-left text-center">
                The <span className="text-[#8D6DFE]"> Key </span> To Unlocking A
                Better Tomorrow
              </h1>
            </div>
          </div>

          <div className="sm:mt-[-130px] sm:top-[529px] top-[680px] flex md:flex-row flex-wrap justify-center w-full sm:gap-x-[32px] gap-y-[32px] sm:pl-[0px] pl-[25px] sm:pr-[0px] pr-[25px]">
            <div className="basic- 1/3 border-[3px] w-[321px] sm:mt-[0px] mt-[-40px] hover:border-[#8D6DFE] border-[#BFBFBF] rounded-[15px] py-[35px] px-[40px] bg-[#FFFFFF]">
              <div className="h-[46px] w-[44px] hover:bg-[#8D6DFE] border-[4px] hover:border-[#8D6DFE] border-[#171326]"></div>

              <h3 className="font-[600] text-[26px] text-[#1A1A28] mt-[22px]">
                CONSUMERS
              </h3>
              <p className="font-[400] sm:text-[16px] text-[12px] text-[#1A1A28] mt-[19px]">
                You can contribute your time,
                <br />
                skills and knowledge.
              </p>
              <div className="flex items-baseline">
                <Image
                  src="/Vector 7.png"
                  alt="Giving Society Image"
                  height={12}
                  width={6}
                />
                <button className="mt-[19px] border-b-[1px] hover:border-[#8D6DFE] text-[16px] hover:text-[#8D6DFE] border-[#171326] text-[16px] text-[#171326] font-[600]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="basic- 1/3 border-[3px] w-[321px] hover:border-[#8D6DFE] border-[#BFBFBF]  rounded-[15px] py-[35px] px-[40px] bg-[#FFFFFF]">
              <div className="h-[46px] w-[44px] hover:bg-[#8D6DFE] border-[4px] rounded-[15px] hover:border-[#8D6DFE] border-[#171326]"></div>

              <h3 className="font-[600] text-[26px] text-[#1A1A28] mt-[22px]">
                BRANDS
              </h3>
              <p className="font-[400] sm:text-[16px] text-[12px] text-[#1A1A28] mt-[19px]">
                You can contribute your time,
                <br />
                skills and knowledge.
              </p>
              <div className="flex items-baseline">
                <Image
                  src="/Vector 7.png"
                  alt="Giving Society Image"
                  height={12}
                  width={6}
                />
                <button className="mt-[19px] border-b-[1px] border-[#8D6DFE] text-[16px] border-[#171326] hover:text-[#8D6DFE] font-[600]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="basic- 1/3 border-[3px] w-[321px]  hover:border-[#8D6DFE] border-[#BFBFBF] rounded-[15px] py-[35px] px-[40px] bg-[#FFFFFF]">
              <div className="h-[46px] w-[44px] rounded-[20px] hover:bg-[#8D6DFE] border-[4px] hover:border-[#8D6DFE] border-[#171326]"></div>

              <h3 className="font-[600] text-[26px] text-[#1A1A28] mt-[22px]">
                NON-PROFITS
              </h3>
              <p className="font-[400] sm:text-[16px] text-[12px] text-[#1A1A28] mt-[19px]">
                You can contribute your time,
                <br />
                skills and knowledge.
              </p>
              <div className="flex items-baseline">
                <Image
                  src="/Vector 7.png"
                  alt="Giving Society Image"
                  height={12}
                  width={6}
                />
                <button className="mt-[19px] hover:text-[#8D6DFE] border-b-[1px] border-[#171326] text-[16px] text-[#171326] font-[600]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <form className="sm:mt-[100px] mt-[80px]">
          <div className="relative sm:pl-0 pl-[10px] sm:pr-0 pr-[10px]">
            <div className="mx-auto border-[1.5px] border-[#BFBFBF] max-w-[818px] rounded-[15px] sm:pt-[50px] pt-[30px] pb-[29px] sm:px-[46px] px-[20px]">
              <p className="text-[#171326] sm:text-[64px] text-[40px] font-[600]">
                <div className="flex sm:justify-start justify-between items-center">
                  <h2 className="sm:text-[64px] text-[35px]">
                    <span className="flex sm:flex-row flex-row-reverse items-center">
                      <span className="ml-[20px]">Begin Your</span>
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

              <div className="flex sm:flex-row flex-col mt-[43px] gap-x-[34px]">
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
                <div className="relative">
                  <input
                    type="text"
                    className="flex justify-between items-center border-[1px] w-[100%] outline-none w-[299px] border-[#A9A9A9] rounded-[15px] py-[10px] px-[24px] mt-[15px] text-[18px]"
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
                    <span className="border-b-[0.5px] border-[#000000]">
                      Terms of Use
                    </span>
                    And Confirm
                  </p>
                  <p>
                    you have read our
                    <p className="inline border-b-[0.5px] border-[#000000]">
                      Privacy and Cookie Statement.
                    </p>
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

      <section className="sm:mt-[155px] mt-[80px] items-center">
        <div className="bg-[#8D6DFE] w-full flex flex-wrap justify-center gap-x-[100px] py-[78px]">
          <h3 className="text-[#FFFFFF] sm:text-[68px] text-[50px] font-[600]">
            Causes We
            <div className="flex items-center">
              <p className="leading-[60px] pr-[20px]">Support</p>
              <Image
                src="/roundewhite.png"
                alt="FLEISCHER Image"
                height={37}
                width={35}
              />
            </div>
          </h3>

          <div className="grid grid-cols-3 items-center gap-x-[20px] px-[25px] mt-[55px] sm:hidden block">
            <Image
              src="/Fleisher.png"
              alt="FLEISCHER Image"
              height={29}
              width={100}
              layout="responsive"
              className="object-contain w-[100px]"
            />

            <Image
              src="/virtual.png"
              alt="FLEISCHER Image"
              height={29}
              width={200}
              layout="responsive"
              className="object-contain w-[100px] sm:hidden block"
            />

            <Image
              src="/united neighbours.png"
              alt="FLEISCHER Image"
              height={29}
              width={100}
              layout="responsive"
              className="object-contain sm:hidden block"
            />
          </div>

          <Image
            src="/Fleisher.png"
            alt="FLEISCHER Image"
            height={75}
            width={259}
            className="object-contain sm:block hidden"
          />

          <Image
            src="/Fleisher.png"
            alt="FLEISCHER Image"
            height={75}
            width={259}
            className="object-contain sm:block hidden"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-row">
          <div className="basic-4/7">
            <div className="flex">
              <h5>OUR MISSION</h5>
              <div>
                <h3>Empowerment</h3>
                <p>
                  Our mission is to empower individuals and communities to make
                  a difference by providing them with the resources,
                  opportunities, and support needed to create positive change.
                </p>

                <p>
                  We envision a world where everyone has equal access to
                  education, healthcare, and basic necessities, and where
                  kindness and generosity are at the heart of human
                  interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="basic-4/7"></div>
        </div>
      </section>
    </main>
  );
};

export default Main;


