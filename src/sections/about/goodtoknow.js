import React from "react";
import Image from "next/image";

const Goodtoknow = () => {
  return (
    <section className="xl:py-[151px] py-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="sm:text-[64px] text-[50px] sm:text-left text-center flex justify-center items-center font-[600] text-[#171326]">
          <p>
            Get To Know Us Better
            <Image
              src="/yellowrectengle.png"
              alt="This is a smilygirl Releted Image"
              height={42}
              width={42}
              className="ml-[8px] inline"
            />
          </p>
        </h2>

        <div className="flex flex-wrap gap-y-[20px] lg:justify-between justify-center sm:px-[20px] px-[10px] sm:py-[76px] py-[10px]">
          <div className="border-[1.5px] rounded-[15px] border-[#BFBFBF]">
            <div>
              <Image
                src="/books.png"
                alt="This is a smilygirl Releted Image"
                height={208}
                width={392}
              />
            </div>

            <div className="pt-[10px] pb-[64px] px-[26.5px]">
              <p className="text-[12px] font-[500] text-[#171326]">
                CASE STUDY
              </p>

              <h6 className="text-[20px] font-[700] mt-[10px]">
                Lorem ipsum dolor sit amet
              </h6>

              <p className="mt-[20px] sm:text-[16px] text-[12px] leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className="border-[1.5px] rounded-[15px] border-[#BFBFBF]">
            <div>
              <Image
                src="/girlswithsmile.png"
                alt="This is a smilygirl Releted Image"
                height={208}
                width={392}
              />
            </div>

            <div className="pt-[10px] pb-[64px] px-[26.5px]">
              <p className="text-[12px] font-[500] text-[#171326]">
                CASE STUDY
              </p>

              <h6 className="text-[20px] font-[700] mt-[10px]">
                Lorem ipsum dolor sit amet
              </h6>

              <p className="mt-[20px] sm:text-[16px] text-[12px] leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className="border-[1.5px] xl:mx-0 mx-auto rounded-[15px] lg:mt-[30px] xl:mt-0 mt-0  border-[#BFBFBF]">
            <div>
              <Image
                src="/pencilcard.png"
                alt="This is a smilygirl Releted Image"
                height={208}
                width={392}
              />
            </div>

            <div className="pt-[10px] pb-[64px] px-[26.5px] xl:mx-0 mx-auto">
              <p className="text-[12px] font-[500] text-[#171326]">
                CASE STUDY
              </p>

              <h6 className="text-[20px] font-[700] mt-[10px]">
                Lorem ipsum dolor sit amet
              </h6>

              <p className="mt-[20px] sm:text-[16px] text-[12px] leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[70px] text-center">
          <button className="w-[260px] h-[40px] rounded-[10px] bg-[#8D6DFE] font-[500] px-[10px] py-[9px] text-[16px] text-[#ffffff]">
            Explore Case Stuides
          </button>
        </div>
      </div>
    </section>
  );
};

export default Goodtoknow;
