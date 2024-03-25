import React from "react";
import Image from "next/image";

const Ourteam = () => {
  return (
    <section className="">
      <div className="max-width-[1240px] px-[20px] bg-[#F5F2FC] py-[110px]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="sm:text-[64px] text-[50px] sm:text-left text-center flex justify-center items-center font-[600] text-[#171326]">
            <p className="flex items-center">
              Our Team
              <Image
                src="/rectengle.png"
                alt="This is a HandFigure Releted Image"
                height={37}
                width={37}
                className="ml-[8px]"
              />
            </p>
          </h2>

          <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-y-[40px] justify-between pt-[110px]">
            <div className="xl:mx-0 mx-auto">
              <Image
                src="/CharlotteEllery.png"
                alt="This is a HandFigure Releted Image"
                height={297}
                width={286}
              />

              <div className="border-[1px] rounded-[15px] border-[#171326] mt-[11px] py-[11px] px-[60px] max-w-[286px]">
                <h6 className="text-[20px] font-[700] text-[#171326]">
                  Charlotte Ellery
                </h6>
                <p className="text-[12px]">CEO / CO-FOUNDER</p>
              </div>
            </div>

            <div className="xl:mx-0 mx-auto">
              <Image
                src="/EdgarDavid.png"
                alt="This is a HandFigure Releted Image"
                height={297}
                width={286}
              />

              <div className="border-[1px] rounded-[15px] border-[#171326] mt-[11px] py-[11px] px-[60px] max-w-[286px]">
                <h6 className="text-[20px] font-[700] text-[#171326]">
                  Edgar David
                </h6>
                <p className="text-[12px]">CHAIRMAN / CO-FOUNDER</p>
              </div>
            </div>

            <div className="xl:mx-0 mx-auto">
              <Image
                src="/lyra.png"
                alt="This is a HandFigure Releted Image"
                height={273}
                width={286}
              />

              <div className="border-[1px] rounded-[15px] border-[#171326] mt-[35px] py-[11px] px-[63px] max-w-[286px]">
                <h6 className="text-[20px] font-[700] text-[#171326]">
                  Lyra Raven
                </h6>
                <p className="text-[12px]">ADVISOR (SALESFORCE)</p>
              </div>
            </div>

            <div className="xl:mx-0 mx-auto">
              <Image
                src="/HowardWade.png"
                alt="This is a HandFigure Releted Image"
                height={286}
                width={284}
              />

              <div className="border-[1px] rounded-[15px] border-[#171326] mt-[25px] py-[11px] px-[63px] max-w-[286px]">
                <h6 className="text-[20px] font-[700] text-[#171326]">
                  Howard Wade
                </h6>
                <p className="text-[12px]">CUSTOMER EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
