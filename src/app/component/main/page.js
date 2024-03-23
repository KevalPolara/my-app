"use client";

import React, { useState } from "react";
import Image from "next/image";
import Form from "../form/page";

export default function Main  ()  {
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


      <Form />


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
        <div className="flex lg:flex-row flex-col justify-between flex-wrap sm:px-[100px] px-[20px] sm:py-[169px] py-[80px]">
          <div className="md:w-[60%] w-[100%]">
            <div className="flex flex-wrap gap-x-[76px]">
              <p className="text-[20px] font-[500] text-[#171326]">
                OUR MISSION
              </p>
              <div>
                <span>
                  <h3 className="flex items-center gap-x-[21px] font-[600] sm:text-[64px] text-[35px] pb-[50px]">
                    Empowerment
                    <Image
                      src="/Vector (3).png"
                      alt="Giving Society Image"
                      height={38}
                      width={37}
                      className="inline sm:w-[37px] w-[22px] sm:h-[37px] h-[22px]"
                    />
                  </h3>
                </span>

                <div className="sm:w-[426px] w-[307px] sm:text-[18px] text-[16px]">
                  <p>
                    Our mission is to empower individuals and communities to
                    make a difference by providing them with the resources,
                    opportunities, and support needed to create positive change.
                  </p>
                  <br></br>

                  <p className="sm:text-[18px] text-[16px]">
                    We envision a world where everyone has equal access to
                    education, healthcare, and basic necessities, and where
                    kindness and generosity are at the heart of human
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[40%] w-[100%]">
            <div className="flex justify-end items-end">
              <div>
                <Image
                  src="/men.png"
                  alt="Giving Society Image"
                  height={391}
                  width={341}
                  className="inline sm:w-[341px] w-[207px] sm:mt-[115px] mt-[45px]"
                />
              </div>

              <div>
                <Image
                  src="/rectangle (1).png"
                  alt="Giving Society Image"
                  height={38}
                  width={37}
                  className="block ml-[10px] sm:w-[37px] w-[25px] sm:h-[38px] h-[26px]"
                />

                <Image
                  src="/rectangle (2).png"
                  alt="Giving Society Image"
                  height={38}
                  width={37}
                  className="block ml-[10px] mt-[10px] sm:w-[37px] w-[25px] sm:h-[38px] h-[26px]"
                />

                <Image
                  src="/circle.png"
                  alt="Giving Society Image"
                  height={38}
                  width={37}
                  className="block ml-[10px] mt-[10px] sm:w-[37px] w-[25px] sm:h-[38px] h-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative lg:bg-[url('/graidentImg.png')] bg-[url('/rectenglegradiunt.png')]  max-w-[1340px] bg-cover rounded-r-[20px]  bg-no-repeat mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[42px] gap-y-[43px] justify-between xl:py-[163px] py-[80px] xl:px-[250px] md:px-[100px] px-[20px]">
            <div className="border-[#FFFFFF] border-[1.5px] rounded-[16px] lg:px-[50px] px-[20px] py-[40px]">
              <h2 className="flex items-center justify-center text-[#FFD527] lg:text-[56px] text-[45px] font-[700]">
                <span className="mt-[-30px] text-[25px] text-[#FFD527] font-[900]">
                  +
                </span>
                $740,886
              </h2>

              <p className="text-[26px] font-[500] text-center text-[#ffffff]">
                Total Raised
                <br />
                This Year
              </p>
            </div>

            <div className="border-[#FFFFFF]  border-[1.5px] rounded-[16px] px-[50px] py-[40px]">
              <h2 className="flex text-[#FFD527] sm:text-[56px] text-[45px] font-[700] items-center justify-center">
                <sup className="text-[26px] text-[#FFD527] font-[900]">+</sup>
                24.3%
              </h2>
              <p className="text-[25px] font-[500] text-[#ffffff] text-center">
                Avg. Increase
                <br />
                in conversion
              </p>
            </div>

            <div className="border-[#FFFFFF]  border-[1.5px] rounded-[16px] px-[50px] py-[40px]">
              <h2 className="flex justify-center items-center text-[#FFD527] sm:text-[56px] text-[45px] font-[700] text-center">
                <sup className="text-[26px] text-[#FFD527] font-[900]">+</sup>
                37.5%
              </h2>
              <p className="text-[25px] font-[500] text-[#ffffff] text-center">
                Avg. Increase
                <br />
                in conversion
              </p>
            </div>

            <div className="border-[#FFFFFF] border-[1.5px] rounded-[16px] px-[50px] py-[40px]">
              <h2 className="flex justify-center items-center text-[#FFD527] sm:text-[56px] text-[45px] font-[700] text-center">
                <sup className="text-[26px] text-[#FFD527] font-[900]">+</sup>
                29.7%
              </h2>

              <p className="text-[25px] font-[500] text-[#ffffff] text-center">
                Avg. Brands Participation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-between sm:px-[98px] px-[34px] pt-[151px] pb-[80px]">

          <div className="lg:mx-0 mx-auto">
            <Image
              src="/laptop.png"
              alt="Laptop With Man Image"
              height={234}
              width={262}
              className="sm:w-[262px] w-[210px] sm:h-[234px] h-[188px]"
            />
          </div>

          <div className="max-w-[501px] lg:mx-0 mx-auto">
            <div className="flex justify-center">

              <Image
                src="/Vector (3).png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="inline sm:w-[37px] w-[22px] sm:h-[37px] h-[22px] mt-[30px] sm:hidden block"
              />
            </div>

            <h2 className="sm:text-[64px] text-[40px] sm:mt-0 mt-[40px] text-[#171326] font-[600]">
              <p className="text-center">
                Joining
              </p>

              <p className="flex gap-x-[20px] items-center">
                GivingSociety

                <Image
                  src="/Vector (3).png"
                  alt="Giving Society Image"
                  height={38}
                  width={37}
                  className="inline sm:w-[37px] w-[22px] sm:h-[37px] h-[22px] mt-[30px] sm:block hidden"
                />
              </p>

            </h2>

            <p className="sm:text-[18px] text-[16px] mt-[50px] text-center">We invite you to join our GivingSociety family and become part of a community dedicated to making a positive difference in the world.
            </p>

            <br />

            <p className="sm:text-[18px] text-[16px] text-center">
              Together, let's build a world where compassion, kindness, and giving thrive.
            </p>

            <div className="flex justify-center mt-[70px]">
              <button className="w-[182px] h-[40px] rounded-[10px] bg-[#8D6DFE] font-[500] px-[10px] px-[8px] text-[16px] text-[#ffffff]">Submit</button>
            </div>

          </div>

          <div className="lg:mx-0 mx-auto">
            <Image
              src="/king.png"
              alt="Laptop With King Image"
              height={322}
              width={187}
            />
          </div>
        </div>
      </section>

      <section>
        <Form />
      </section>

      <section>
        <div className="max-w-[501px] mx-auto pt-[63px] pb-[161px]">
          <h2 className="sm:text-[64px] text-[40px] text-center sm:mt-0 mt-[40px] text-[#171326] font-[600]">
            <div className="flex justify-center">

              <Image
                src="/Vector (3).png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="inline sm:w-[37px] w-[22px] sm:h-[37px] h-[22px] mt-[30px] sm:hidden block"
              />
            </div>
            <p className="text-center">
              Get A Free
            </p>

            <p className="flex gap-x-[20px] items-center text-center">
              Consultation

              <Image
                src="/Vector (3).png"
                alt="Giving Society Image"
                height={38}
                width={37}
                className="inline sm:w-[37px] w-[22px] sm:h-[37px] h-[22px] mt-[30px] sm:block hidden"
              />
            </p>

          </h2>

          <p className="sm:text-[18px] text-[16px] mt-[50px] text-center">
            Don't miss out on this opportunity to gain valuable insights and expert guidance. To schedule your free consultation, simply click the button below and fill out the form.
          </p>

          <br />

          <p className="sm:text-[18px] text-[16px] text-center">
            Our team will reach out to you promptly to arrange a convenient time for our discussion.
          </p>

          <div className="flex justify-center mt-[70px]">
            <button className="w-[182px] h-[40px] rounded-[10px] bg-[#8D6DFE] font-[500] px-[10px] px-[8px] text-[16px] text-[#ffffff]">Contact us</button>
          </div>

        </div>
      </section>

    </main>
  );
};

