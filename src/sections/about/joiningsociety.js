import React from "react";
import Image from "next/image";

const Joiningsociety = () => {
  return (
    <section>
      <div className="max-w-[1240px]">
      <div className="flex flex-wrap justify-between pt-[151px] pb-[80px]">
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
            <p className="text-center">Joining</p>

            <p className="flex justify-center gap-x-[20px] items-center">
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

          <p className="sm:text-[18px] text-[16px] mt-[50px] text-center">
            We invite you to join our GivingSociety family and become part of a
            community dedicated to making a positive difference in the world.
          </p>

          <br />

          <p className="sm:text-[18px] text-[16px] text-center">
            Together, let's build a world where compassion, kindness, and giving
            thrive.
          </p>

          <div className="flex justify-center mt-[70px]">
            <button className="w-[182px] h-[40px] rounded-[10px] bg-[#8D6DFE] font-[500] px-[10px] px-[8px] text-[16px] text-[#ffffff]">
              Submit
            </button>
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
      </div>
    </section>
  );
};

export default Joiningsociety;
