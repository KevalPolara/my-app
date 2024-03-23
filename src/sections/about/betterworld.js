import React from "react";
import Image from "next/image";

const Betterworld = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 flex-wrap items-start">
        <div className="max-w-[568px] mx-auto py-[106px]">
          <h1 className="xl:text-[78px] text-[40px] xl:leading-[82px] leading-0 text-[#171326] font-[600] text-center">
            <p>We Believe In</p>
            <span className="text-[#8D6DFE] mr-[8px]">Generosity</span>
            For A better World
          </h1>

          <div className="xl:mt-[177px] mt-0">
            <Image
              src="/rectengle.png"
              alt="This is a HandFigure Releted Image"
              height={37}
              width={37}
              className="xl:block hidden"
            />
          </div>
        </div>

        <div className="flex items-start">
          <Image
            src="/handfigure.png"
            alt="This is a HandFigure Releted Image"
            height={873}
            width={720}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Betterworld;
